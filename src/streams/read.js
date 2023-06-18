import fs from "fs";
import path from "path";

const read = async () => {
  const filePath = path.join("src", "streams", "files", "fileToRead.txt");
  const stream = fs.createReadStream(filePath, { encoding: "utf8" });
  stream.on("readable", () => {
    const reading = stream.read();
    if (reading) {
      process.stdout.write(reading);
    }
  });
};

await read();
