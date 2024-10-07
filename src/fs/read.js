import { join } from "path";
import { readFile } from "fs/promises";

import { getPaths, fsErrorMessage } from "../helpers/index.js"

const { __dirname } = getPaths(import.meta.url);

const read = async () => {
    const path = join(__dirname, "files", "fileToRead.txt");

    try {
        const data = await readFile(path);
        console.log(data.toString("utf-8"));
    } catch (e) {
        if(e.code === "ENOENT") {
            throw new Error(fsErrorMessage);
        }
        
        throw e;
    }
};

await read();