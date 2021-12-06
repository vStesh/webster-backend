const { Router } = require('express');
const createdOrgMiddleware = require('../../middlewares/createdOrg-middleware')
const {createdOrganization, getAllOrganizations, getOneOrganization, editOrganization, deleteOrganization} = require('../../controllers/organize.controller')

const router = Router();

// /api/organize/createdOrganization
router.post('/', createdOrgMiddleware, createdOrganization);
router.get('/', getAllOrganizations);
router.get('/:id', getOneOrganization);
router.put('/:id', editOrganization);
router.delete('/:id', deleteOrganization);


module.exports = router;