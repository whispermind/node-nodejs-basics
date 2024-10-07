import { access } from "fs";
import { rename as renameFS } from "fs/promises";
import { join } from "path";

import { getPaths, fsErrorMessage } from "../helpers/index.js"

const { __dirname } = getPaths(import.meta.url);

const rename = async () => {
    const filesPath = join(__dirname, "files");
    const source = join(filesPath, "wrongFilename.txt");
    const destination = join(filesPath, "properFilename.md");
    
    access(destination, async (e) => {
        if (!e) {
            throw new Error(fsErrorMessage);
        }

        if (e.code === "ENOENT") {  
            try{
                await renameFS(source, destination);
                return
            } catch (e) {
                if(e.code === "ENOENT") throw new Error(fsErrorMessage);
                throw e;
            }
        }
})
};

await rename();