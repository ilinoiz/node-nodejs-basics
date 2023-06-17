import fs from "fs/promises";
import path from "path";
import { pathExists } from "./utils";

const copy = async () => {
  const basePath = path.join("src", "fs");
  const fromFolder = path.join(basePath, "files");
  const toFolder = path.join(basePath, "files_copy");

  const isTargetFolderExists = await pathExists(toFolder);
  const isSourceFolderExists = await pathExists(fromFolder);

  if (isTargetFolderExists || !isSourceFolderExists) {
    throw new Error("FS operation failed");
  }

  await fs.mkdir(toFolder);

  const files = await fs.readdir(fromFolder);
  files.forEach(async (fileName) => {
    await fs.copyFile(
      path.join(fromFolder, fileName),
      path.join(toFolder, fileName)
    );
  });
};



await copy();
