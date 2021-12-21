const { Router } = require('express');
const { createService, getService, getAllService, updateService, deleteService } = require('../../controllers/service.controller');
const serviceMiddleware = require('../../middlewares/service-middleware');
const middlewareUpdateAndDelete = require('../../middlewares/service-update-delete');

const router = Router();

// /api/organize/createdOrganization
router.post('/create', serviceMiddleware, createService);
// /api/organize/getOneOrganization
router.get('/getOne/:id', getService);
// /api/organize/getAllOrganization
router.get('/getAll', getAllService);
// /api/organize/updateOrganization
router.put('/update/:id', middlewareUpdateAndDelete, updateService);
// /api/organize/deleteOrganization
router.delete('/delete/:id', middlewareUpdateAndDelete, deleteService);


module.exports = router;