const fs = require("fs");
const path = require("path");

const FOLDER_NAME = "logs";
const date = new Date();
const fileName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.log`;

const logger = (log_data) => {
    let log_message = `Log: ${toString(log_data)}`
    fs.appendFileSync(path.join(__dirname, `${FOLDER_NAME}/${fileName}`), `${log_message} \n`, (err) => {});
};

const toString = (value) => {

    if (typeof value === "object") {
        value = JSON.stringify(value);
    } else {
        value = String(value);
    }

    return value;
};

module.exports = logger;
