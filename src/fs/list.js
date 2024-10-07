import { join } from "path";
import { readdir } from "fs/promises"

import { getPaths, fsErrorMessage } from "../helpers/index.js"

const { __dirname } = getPaths(import.meta.url);

const list = async () => {
    const path = join(__dirname, "files");

    try {
        const folderList = await readdir(path);
        console.log(folderList);
    } catch (e) {
        if(e.code === "ENOENT") throw new Error(fsErrorMessage);
        throw e;
    }
};

await list();