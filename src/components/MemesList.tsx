"use client";

import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { motion, AnimatePresence } from "framer-motion";

interface MemeImage {
  src: string;
  name: string;
}

interface MemesListProps {
  memes: MemeImage[];
}

export default function MemesList({ memes }: MemesListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce the search term
  useMemo(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredMemes = useMemo(() => {
    if (!debouncedSearchTerm) return memes;
    return memes.filter((meme) =>
      meme.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, memes]);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Memes</h2>
        <div className="flex">
          <input
            type="text"
            name="search"
            placeholder="Search memes"
            className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <motion.div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
        layout
      >
        <AnimatePresence>
          {filteredMemes.length > 0 ? (
            filteredMemes.map((meme) => (
              <motion.div
                key={meme.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                className="break-inside-avoid cursor-pointer"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div>
                      <ImageWithSkeleton
                        src={meme.src}
                        alt={`${meme.name}`}
                        width={500}
                        height={300}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                      <div className="mt-2 text-sm text-gray-800">{meme.name}</div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95dvw] max-h-[90dvh] w-full md:w-auto h-auto p-0 overflow-hidden border-none bg-transparent">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={meme.src}
                        alt={`${meme.name}`}
                        className="w-full md:w-auto h-auto max-w-none md:max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="col-span-full text-center text-gray-500 mt-8"
            >
              No memes found matching your search.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
