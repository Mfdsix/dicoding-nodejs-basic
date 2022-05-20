const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log("Failed reading file")
        return;
    }

    console.log(data);
}

fs.readFile('./filesystems.txt', 'UTF-8', fileReadCallback);