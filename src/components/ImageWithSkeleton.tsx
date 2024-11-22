"use client";

import Image from "next/image";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className = "",
}: ImageWithSkeletonProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-200 animate-pulse">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full opacity-0 ${className}`}
        style={{ objectFit: "contain" }}
        priority
        onLoadingComplete={(img) => {
          img.classList.remove("opacity-0");
          img.classList.add("opacity-100");
          img.parentElement?.classList.remove("animate-pulse", "bg-gray-200");
        }}
      />
    </div>
  );
}
