"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNum = (stringNumber) => {
    const isNumber = stringNumber.match(/^[0-9]+$/) != null ? true : false;
    return isNumber;
};
const checkURL = (req, res, next) => {
    const imgName = req.query.imgName;
    const imgHeight = req.query.height;
    const imgWidth = req.query.width;
    if (!imgName) {
        return res.status(400).send('Missing Image Name');
    }
    if (!imgHeight || !imgWidth) {
        return res.status(400).send('Missing the width and the height');
    }
    if (!isNum(imgWidth) || Number(imgWidth) <= 0) {
        return res.status(400).send("Invalid Image's width");
    }
    if (Number(imgHeight) <= 0 || !isNum(imgHeight)) {
        return res.status(400).send("Invalid Image's width");
    }
    next();
};
exports.default = checkURL;
