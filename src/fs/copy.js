import { join } from "path";
import { cp } from "fs/promises";
import { access }  from "fs";

import { getPaths, fsErrorMessage } from "../helpers/index.js";

const { __dirname } = getPaths(import.meta.url);

const copy = async () => {
    const source = join(__dirname, "files");
    const dest = join(__dirname, "files_copy");

    access(dest, async (e) => {
        if (!e) throw new Error(fsErrorMessage);

        if (e.code === "ENOENT") {
            try {
                await cp(source, dest, { recursive: true });
                return
            } catch (e) {
                if (e.code === "ENOENT") throw new Error(fsErrorMessage);
                throw e;
            }
        }

        throw e;
    })
};

await copy();
