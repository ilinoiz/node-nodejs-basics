import { fork } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const filePath = path.join("src", "cp", "files", "script.js");
  const forked = fork(filePath, args);
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
