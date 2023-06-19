import fs from "fs/promises";
import path from "path";
import { pathExists } from "./utils";

const create = async () => {
  const filePath = path.join("src", "fs", "files", "fresh.txt");
  const isFileExists = await pathExists(filePath);
  if (isFileExists) {
    throw new Error("FS operation failed");
  }
  await fs.writeFile(filePath, "I am fresh and young");
};

await create();
