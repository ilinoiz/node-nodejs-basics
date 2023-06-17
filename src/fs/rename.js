import fs from "fs/promises";
import path from "path";
import { pathExists } from "./utils";

const rename = async () => {
  const basePath = path.join("src", "fs", "files");
  const sourceFile = path.join(basePath, "wrongFilename.txt");
  const targetFile = path.join(basePath, "properFilename.md");

  const isSourceFileExists = await pathExists(sourceFile);
  const isTargetFileExists = await pathExists(targetFile);
  if (!isSourceFileExists || isTargetFileExists) {
    throw new Error("FS operation failed");
  }
  await fs.rename(sourceFile, targetFile);
};

await rename();
