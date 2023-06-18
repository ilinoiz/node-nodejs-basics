import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const workerThreadsCount = os.availableParallelism();
  const results = [];
  let fibonacciNumber = 10;

  for (let i = 0; i < workerThreadsCount; i++) {
    const worker = new Worker("./src/wt/worker.js", {
      workerData: fibonacciNumber,
    });

    fibonacciNumber++;

    worker.on("message", (message) => {
      results.push(message);
      processResults(results, workerThreadsCount);
    });

    worker.on("error", (error) => {
      results.push({
        data: null,
        status: "error",
        initialValue: Number(error.message),
      });
      processResults(results, workerThreadsCount);
    });
  }
};

const processResults = (results, workerThreadsCount) => {
  if (results.length !== workerThreadsCount) {
    return;
  }

  const resultsOutput = results
    .sort((a, b) => a.initialValue - b.initialValue)
    .map((result) => {
      return {
        data: result.data,
        status: result.status,
      };
    });

  console.log(resultsOutput);
};

await performCalculations();
