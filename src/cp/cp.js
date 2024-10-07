import { fork } from "child_process"
import { join } from "path";

import { getPaths } from "../helpers/index.js";
import { stderr, stdin, stdout } from "process";

const { __dirname } = getPaths(import.meta.url);

const spawnChildProcess = async (args) => {
    const path = join(__dirname, "files", "script.js");
    fork(path, args, { 
        stdio: { stdin, stdout, stderr }
    });
};

spawnChildProcess(process.argv.slice(2));
