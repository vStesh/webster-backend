const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { getRes } = require('../service/getResponse');

class FileService {
    saveFile(file) {
      try {
        const fileName = uuidv4() + '.png';
        const filePath = path.resolve('static', fileName);
        file.mv(filePath)
        return fileName
      } catch (err) {
        return res.status(401).json(getRes(100, { error: err.message }))
      }
    }
}

module.exports = new FileService();