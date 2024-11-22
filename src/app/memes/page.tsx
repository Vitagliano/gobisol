import MemesList from "@/components/MemesList";
import fs from "fs";
import path from "path";

// Define the MemeImage interface
interface MemeImage {
  src: string;
  name: string;
}

const Memes = () => {
  // Corrected path to the memes.json file
  const memesDataPath = path.join(
    process.cwd(),
    "src",
    "app",
    "memes",
    "memes.json"
  );

  // Synchronously read the JSON file
  const memesData = JSON.parse(fs.readFileSync(memesDataPath, "utf-8"));

  // Map the JSON data to the MemeImage interface
  const memes: MemeImage[] = memesData.map((meme: MemeImage) => ({
    src: meme.src,
    name: meme.name,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <MemesList memes={memes} />
    </div>
  );
};

export default Memes;
