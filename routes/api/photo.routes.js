const { Router } = require('express');
const {createPhoto, getPhoto, getAllPhotos, updatePhoto, deletePhoto} = require('../../controllers/photo.controller')

const router = Router();

// /api/photo/createPhoto
router.post('/', createPhoto);
// /api/photo/getPhoto
router.get('/:id', getPhoto);
// /api/photo/getAllPhotos
router.get('/', getAllPhotos);
// /api/photo/updatePhoto
router.put('/:id', updatePhoto);
// /api/photo/deletePhoto
router.delete('/:id', deletePhoto);

module.exports = router