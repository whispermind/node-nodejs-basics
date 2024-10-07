import { join } from "path";
import { createHash } from "crypto";
import { ReadStream } from "fs";

import { getPaths } from "../helpers/index.js";

const { __dirname } = getPaths(import.meta.url);

const calculateHash = async () => {
    const path = join(__dirname, "files", "fileToCalculateHashFor.txt");
    const hash = createHash("sha256")

    ReadStream(path)
    .on("data", (data) => {
        hash.update(data);
    })
    .on("end", () => {
        console.log(hash.digest("hex"));
    })
    .on("error", (e) => {
        console.log(e);
    })
};

await calculateHash();