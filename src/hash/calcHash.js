import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesDir = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const hash = createHash("sha256");

    const stream = createReadStream(filesDir);
    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    await new Promise((resolve, reject) => {
      stream.on("end", resolve);
      stream.on("error", reject);
    });

    const hashValue = hash.digest("hex");
    console.log(hashValue);
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
