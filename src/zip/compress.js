import zlib from "zlib";
import fs from "fs";
import path from "path";

const compress = async () => {
  const basePath = path.join("src", "zip", "files");
  const fileToCompressPath = path.join(basePath, "fileToCompress.txt");
  const fileToWritePath = path.join(basePath, "archive.gz");
  const readStream = fs.createReadStream(fileToCompressPath, {
    encoding: "utf8",
  });
  const writeStream = fs.createWriteStream(fileToWritePath);

  readStream.pipe(zlib.createGzip()).pipe(writeStream);
};

await compress();
