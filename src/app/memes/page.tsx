import fs from "fs";
import path from "path";
import MemesList from "@/components/MemesList";

interface MemeImage {
  src: string;
  name: string;
}

export default function Memes() {
  const getMemeImages = (): MemeImage[] => {
    const memesDirectory = path.join(process.cwd(), "public/images/memes");
    const filenames = fs.readdirSync(memesDirectory);

    const memes = filenames.map((filename) => ({
      src: `/images/memes/${filename}`,
      name: filename.split(".")[0],
    }));

    return memes;
  };

  const memes = getMemeImages();

  return (
    <div className="container mx-auto px-4 py-8">
      <MemesList memes={memes} />
    </div>
  );
}
