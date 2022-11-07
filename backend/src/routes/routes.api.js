const express = require('express')
const router = express.Router()
const schemaApi = require('../modules/schemaApi')

//Create a New Task
router.post('/create', (req, res) => {
    const task = schemaApi(req.body);
    task
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get All Tasks
router.get('/', (req, res) => {
    schemaApi
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Update a Task
router.put('/edit/:id', (req, res) => {
    const { id } = req.params
    const { name, description} = req.body
    schemaApi
    .updateOne({_id: id}, { $set: {name, description}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Delete a Task
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    schemaApi
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router