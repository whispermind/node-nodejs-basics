import { pipeline } from "stream";
import { ReadStream, WriteStream } from "fs";
import { join } from "path";
import { createGunzip } from "zlib";

import { getPaths } from "../helpers/index.js";

const { __dirname } = getPaths(import.meta.url);

const decompress = async () => {
    const folderPath = join(__dirname, "files");
    const source = join(folderPath, "archive.gz");
    const destination = join(folderPath, "fileToCompress.txt");

    const gunzip = createGunzip();

    pipeline(ReadStream(source), gunzip, WriteStream(destination), (e) => {
        if(e) {
            console.log(e);
        }
    })
};

await decompress();