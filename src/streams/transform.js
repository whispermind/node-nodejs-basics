import { pipeline, Transform } from "stream";

const transform = async () => {
    const tStream = new Transform({
        transform(chunk, _, callback) {
            this.push(chunk.toString().split("").reverse().join("").trim() + "\n");
            callback();
        }
    });

    pipeline(process.stdin, tStream, process.stdout, (e) => {
        if(e) {
            console.log(e);
        }
    });
};

await transform();