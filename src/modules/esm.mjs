import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  const aJsonPath = path.join(__dirname, "files", "a.json");
  const aJsonContent = readFileSync(aJsonPath, "utf8");
  unknownObject = JSON.parse(aJsonContent);
} else {
  const bJsonPath = path.join(__dirname, "files", "b.json");
  const bJsonContent = readFileSync(bJsonPath, "utf8");
  unknownObject = JSON.parse(bJsonContent);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(
  `Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`
);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
