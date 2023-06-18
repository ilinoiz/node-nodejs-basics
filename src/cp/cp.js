import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const forked = fork("src/cp/files/script.js", args);
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
