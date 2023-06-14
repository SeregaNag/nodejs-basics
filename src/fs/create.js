import { writeFile, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const create = async () => {
  const filesDir = join(__dirname, "files", "fresh.txt");

  try {
    await access(filesDir);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await writeFile(filesDir, "I am fresh and young", "utf8");
      } catch (error) {
        console.error(error);
      }
    } else throw error;
  }
};

await create();
