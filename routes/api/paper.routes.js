const { Router } = require('express');
const {createPaper,  getPaper, updatePaper, deletePaper} = require('../../controllers/paper.controller');

const router = Router();

router.post('/', createPaper);
router.put('/:id', getPaper);
router.put('/:id', updatePaper);
router.delete('/:id', deletePaper);

module.exports = router