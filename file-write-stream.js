const fs = require('fs');

const writeFileStream = fs.createWriteStream('write-output.txt')
for (let i = 0; i < 6; i++) {
    writeFileStream.write(`Write line ${i + 1}\n`)
}
writeFileStream.end();

const readFileStream = fs.createReadStream('./write-output.txt', {
    highWaterMark: 5
})
readFileStream.on('readable', () => {
    try {
        console.log(`${readFileStream.read()}`)
    } catch (e) {
        console.log("Error reading file, ", e.name ?? "Unknown Error")
    }
})
readFileStream.on('end', () => {
    console.log("Reading file done")
})