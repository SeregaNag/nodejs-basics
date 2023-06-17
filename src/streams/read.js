import { createReadStream } from "fs";

const read = async () => {
  const filePath = "src/streams/files/fileToRead.txt";
  const stream = createReadStream(filePath);

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("error", (error) => {
    console.error("Error reading file:", error);
  });
};

await read();
