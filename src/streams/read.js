import { join } from "path";
import { ReadStream } from "fs";
import { pipeline } from "stream"; 

import { getPaths } from "../helpers/index.js";

const { __dirname } = getPaths(import.meta.url);

const read = async () => {
    const path = join(__dirname, "files", "fileToRead.txt");

    pipeline(ReadStream(path), process.stdout, (e) => {
        if (e) console.log(e);
    });
};

await read();