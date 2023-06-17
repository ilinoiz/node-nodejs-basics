import fs from "fs/promises";
import path from "path";
import { pathExists } from "./utils.js";

const read = async () => {
  const filePath = path.join("src", "fs", "files", "fileToRead.txt");
  const isFileExists = await pathExists(filePath);

  if (!isFileExists) {
    throw new Error("FS operation failed");
  }

  const fileData = await fs.readFile(filePath, 'utf8');

  console.log(fileData);
};

await read();
