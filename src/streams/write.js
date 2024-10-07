import { WriteStream } from "fs"
import { join } from "path";
import { pipeline } from "stream";

import { getPaths } from "../helpers/index.js";

const { __dirname } = getPaths(import.meta.url);

const write = async () => {
    const path = join(__dirname, "files", "fileToWrite.txt");

    pipeline(process.stdin, WriteStream(path), (e) => {
        if(e) {
            console.log(e);
        }
    });
};

await write();