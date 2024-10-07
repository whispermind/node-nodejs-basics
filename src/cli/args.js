const parseArgs = () => {
    let formatted = 
    process.argv.slice(2)
    .reduce((acc, curr, index, arr) => {
        if(!(index % 2)) {
            return acc += curr.slice(2);
        }

        acc += ` is ${curr}`;
        if(index !== arr.length - 1) acc += ", ";
        return acc;
    }, "");
    
    console.log(formatted);
};

parseArgs();