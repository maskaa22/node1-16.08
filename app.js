//домашка
const fs = require('fs');
const path = require('path');
const womenPath = path.join(__dirname, '1800');
const manPath = path.join(__dirname, '2000');

function namePath(newPath) {
    fs.readdir(newPath, (err, files) => {

        if (err) {
            console.log(err);
            return
        }

        files.forEach(file => {

            const filePath = path.join(newPath, file)
            const namePathFile = path.basename(filePath)
            const filenamePathNewMan = path.join(__dirname, '2000', namePathFile);
            const filenamePathNewWoman = path.join(__dirname, '1800', namePathFile);

            fs.readFile(filePath, (err1, data) => {

                if (err1) {
                    console.log(err1);
                    return
                }

                const arr = JSON.parse(data.toString());

                if (arr.gender === "male") {
                    fs.rename(filePath, filenamePathNewMan, err2 => {
                        console.log(err2);
                    })
                }

                else if (arr.gender === "female") {
                    fs.rename(filePath, filenamePathNewWoman, err2 => {
                        console.log(err2);
                    })
                }

            })
        })
    })
}

namePath(womenPath);
namePath(manPath);
