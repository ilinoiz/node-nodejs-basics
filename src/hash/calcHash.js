import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const calculateHash = async () => {
  const filePath = path.join(
    "src",
    "hash",
    "files",
    "fileToCalculateHashFor.txt"
  );
  const fileData = await fs.readFile(filePath, "utf8");
  const hash = crypto.createHash("sha256");
  hash.update(fileData);
  
  console.log(hash.digest("hex"));
};

await calculateHash();
