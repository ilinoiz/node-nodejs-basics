import fs from "fs";
import path from "path";

const write = async () => {
  const filePath = path.join("src", "streams", "files", "fileToWrite.txt");
  const stream = fs.createWriteStream(filePath);

  process.stdin.on("readable", () => {
    const reading = process.stdin.read();
    if (reading) {
      stream.write(reading);
    }
  });
};

await write();
