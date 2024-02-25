// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CREATE
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send(err);
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render('students/index', { students });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
