const fs = require('fs');

const readableStream = fs.createReadStream('./filesystems.txt', {
    highWaterMark: 3
})

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]\n`);
    } catch (e) {
        console.log("Error when reading file chunk", e.name ?? "Unknown error");
    }
})

readableStream.on('end', () => {
    console.log("Reading File Done");
})