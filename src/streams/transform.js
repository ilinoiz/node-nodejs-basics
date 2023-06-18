import fs from "fs";
import path from "path";
import { Transform } from "stream";
import { EOL } from "os";

const myTransform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join("").concat(EOL));
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await myTransform();
