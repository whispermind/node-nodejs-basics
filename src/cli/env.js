const parseEnv = () => {
    const formatted = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .reduce((acc, [key, value]) => acc += `${key}=${value}; `, "")
    .trimEnd();
    
    console.log(formatted);
};

parseEnv();