import { join } from "path";
import { rm } from "fs/promises";

import { getPaths, fsErrorMessage } from "../helpers/index.js"

const { __dirname } = getPaths(import.meta.url);

const remove = async () => {
    const path = join(__dirname, "files", "fileToRemove.txt");

    try {
        await rm(path);
    } catch (e) {
        if (e?.code === "ENOENT") throw new Error(fsErrorMessage); 
        throw e;
    }
};

await remove();