import { join } from "path";
import { writeFile } from "fs/promises"
import { access } from "fs";

import { getPaths, fsErrorMessage } from "../helpers/index.js"

const { __dirname } = getPaths(import.meta.url);

const create = async () => {
    const path = join(__dirname, "files", "fresh.txt");
    const data = "I am fresh and young";
    
    access(path, async (e) => {
        if (!e) throw new Error(fsErrorMessage);

        if (e.code === "ENOENT") {
            try {
                await writeFile(path, data);
                return
            } catch (e) {
                throw e
            }
        }
        
        throw e
    });
};

await create();