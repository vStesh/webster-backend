const { Router } = require('express');
const {createPhoto, getPhoto, updatePhoto, deletePhoto} = require('../../controllers/photo.controller')

const router = Router();

router.post('/', createPhoto)
router.get('/:id', getPhoto)
router.put('/:id', updatePhoto)
router.delete('/:id', deletePhoto) 

module.exports = router