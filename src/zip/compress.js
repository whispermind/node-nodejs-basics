import { pipeline } from "stream";
import { ReadStream, WriteStream } from "fs";
import { join } from "path";
import { createGzip } from "zlib";

import { getPaths } from "../helpers/index.js";

const { __dirname } = getPaths(import.meta.url);

const compress = async () => {
    const folderPath = join(__dirname, "files");
    const source = join(folderPath, "fileToCompress.txt");
    const destination = join(folderPath, "archive.gz");

    const gzip = createGzip();

    pipeline(ReadStream(source), gzip, WriteStream(destination), (e) => {
        if(e) {
            console.log(e);
        }
    })
};

await compress();