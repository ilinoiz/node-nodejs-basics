import fs from "fs/promises";
import path from "path";
import { pathExists } from "./utils";

const list = async () => {
  const folderPath = path.join("src", "fs", "files");
  const isFolderExists = await pathExists(folderPath);

  if (!isFolderExists) {
    throw new Error("FS operation failed");
  }

  const files = await fs.readdir(folderPath);
  files.forEach(async (fileName) => {
    console.log(fileName);
  });
};

await list();