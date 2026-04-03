const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

router.get('/', controller.getStudents);
router.get('/add', controller.addForm);
router.post('/add', controller.createStudent);
router.get('/edit/:id', controller.editForm);
router.put('/edit/:id', controller.updateStudent);
router.delete('/delete/:id', controller.deleteStudent);

module.exports = router;
