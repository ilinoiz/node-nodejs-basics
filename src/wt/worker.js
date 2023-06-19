import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.postMessage({
    data: nthFibonacci(workerData),
    status: "resolved",
    initialValue: workerData,
  });
};
try {
  // Please uncomment to check error

  // if (workerData === 11 || workerData === 16) {
  //     throw new Error();
  //   }
  sendResult();
} catch (error) {
  throw new Error(workerData);
}
