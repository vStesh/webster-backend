const { Router } = require('express');
const {getAllEvents, getEvent, createEvent, editEvent, deleteEvent} = require('../../controllers/event.controller');
const createEventMiddleware = require('../../middlewares/createEvent-middleware');
const editEventMiddleware = require('../../middlewares/edit-middleware');
const deleteEventMiddleware = require('../../middlewares/delete-middleware');

const router = Router();

// GET:/api/event/
router.get('/', getAllEvents);
// POST:/api/event/
router.post('/:id', createEventMiddleware, createEvent);
// GET:/api/event/:id
router.get('/:id', getEvent);
// PUT:/api/event/:id
router.put('/:id', editEventMiddleware, editEvent);
// DELETE:/api/event/:id
router.delete('/:id', deleteEventMiddleware, deleteEvent);


module.exports = router;