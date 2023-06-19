import zlib from "zlib";
import fs from "fs";
import path from "path";

const decompress = async () => {
  const basePath = path.join("src", "zip", "files");
  const toFilePath = path.join(basePath, "fileToCompress.txt");
  const fromFilePath = path.join(basePath, "archive.gz");
  const readStream = fs.createReadStream(fromFilePath);
  const writeStream = fs.createWriteStream(toFilePath);

  readStream.pipe(zlib.createGunzip()).pipe(writeStream);
};

await decompress();
