const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { getRes } = require('../service/getResponse');
const config = require('../config');

class FileService {
  saveAvatar(file, id) {
    try {
      const fileName = id + '.png';
      const filePath = path.resolve(config.STORAGE_FILES, 'avatar', fileName);
      file.mv(filePath)
      return this.getPath() + 'avatar/' + fileName
    } catch (err) {
        return res.status(401).json(getRes(100, { error: err.message }))
    }
  }
  savePhotos() {
    try {
      const fileName = uuidv4() + '.png';
      const filePath = path.resolve(config.STORAGE_FILES, 'photos', fileName);
      file.mv(filePath)
      return this.getPath() + 'photos/' + fileName
    } catch (err) {
        return res.status(401).json(getRes(100, { error: err.message }))
    }
  }
  getPath() {
    return 'http://img.printapp.store/';
  }
}

module.exports = new FileService();