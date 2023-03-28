const express = require('express')
const Client = require('../models/clientModel')

const router = express.Router()

router.get('/', (req, res) => {
    
})

router.get('/:id', (req, res) => {
    
})

router.post('/', async (req, res) => {
    const {name, clientSince, primaryContact, phone, email, balance, reminders} = req.body

    try {
        const client = await Client.create({name, clientSince, primaryContact, phone, email, balance, reminders})
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', (req, res) => {
    
})

router.patch('/:id', (req, res) => {

})

module.exports = router