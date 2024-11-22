"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function CustomScrollbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(30); // Default thumb height in pixels
  const [isDragging, setIsDragging] = useState(false);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef<number>(0);
  const startScrollRef = useRef<number>(0);

  // Update scroll percentage and thumb size
  const updateScrollData = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollableHeight = documentHeight - windowHeight;

    const percentage = (scrollTop / scrollableHeight) * 100;
    setScrollPercentage(percentage);

    // Dynamically set thumb height based on viewport
    const calculatedThumbHeight = Math.max(
      (windowHeight / documentHeight) * 100,
      10 // Minimum height percentage
    );
    setThumbHeight(calculatedThumbHeight);
  }, []);

  useEffect(() => {
    updateScrollData();

    const handleScroll = () => {
      updateScrollData();
    };

    const handleResize = () => {
      updateScrollData();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollData]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !scrollbarRef.current) return;

      e.preventDefault();
      const scrollbarRect = scrollbarRef.current.getBoundingClientRect();
      const scrollbarHeight = scrollbarRect.height;
      
      // Calculate the delta from the initial click position
      const deltaY = e.clientY - startYRef.current;
      const deltaPercentage = (deltaY / scrollbarHeight) * 100;
      
      // Calculate new scroll position based on the initial scroll position
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;
      
      const initialScrollPercentage = (startScrollRef.current / maxScroll) * 100;
      const newPercentage = Math.max(0, Math.min(initialScrollPercentage + deltaPercentage, 100));
      
      const newScrollPosition = (newPercentage / 100) * maxScroll;

      window.scrollTo({
        top: newScrollPosition,
        behavior: "auto"
      });
    },
    [isDragging]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    startYRef.current = e.clientY;
    startScrollRef.current = window.scrollY;

    // Disable text selection while dragging
    document.body.style.userSelect = 'none';
  };

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Re-enable text selection
    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mouseleave", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === thumbRef.current) return;
    
    const scrollbarRect = scrollbarRef.current?.getBoundingClientRect();
    if (!scrollbarRect) return;

    const clickY = e.clientY - scrollbarRect.top;
    const percentage = (clickY / scrollbarRect.height) * 100;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = documentHeight - windowHeight;
    const scrollPosition = (percentage / 100) * maxScroll;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className="custom-scrollbar" ref={scrollbarRef} onClick={handleTrackClick}>
      <div
        className="custom-scrollbar-thumb"
        ref={thumbRef}
        style={{
          height: `${thumbHeight}%`,
          transform: `translateY(${scrollPercentage}%)`,
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}
