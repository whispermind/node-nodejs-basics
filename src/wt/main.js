import { join } from "path";
import { Worker } from "worker_threads";
import { availableParallelism } from "os";

import { getPaths } from "../helpers/index.js";

const { __dirname } = getPaths(import.meta.url);

const performCalculations = async () => {
    const workerPath = join(__dirname, "worker.js");
    const workers = [];

    for(let i = 0, y = 10; i < availableParallelism(); i++, y++) {
        const task = new Promise((res) => {
            const worker = new Worker(workerPath)
            worker.on("message", (data) => {
                res({ status: "resolved", data });
                worker.terminate();
            });
            worker.on("error", () => {
                res({ status: "error", data: null })
                worker.terminate()
            });
            worker.postMessage(y);
        })
        workers.push(task);
    }

    const results = await Promise.all(workers);
    console.log(results);
};

await performCalculations();