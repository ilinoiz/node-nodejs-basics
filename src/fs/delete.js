import fs from "fs/promises";
import path from "path";
import { pathExists } from "./utils";

const remove = async () => {
  const sourceFile = path.join("src", "fs", "files", "fileToRemove.txt");

  const isSourceFileExists = await pathExists(sourceFile);
  if (!isSourceFileExists) {
    throw new Error("FS operation failed");
  }
  await fs.unlink(sourceFile);
};

await remove();
