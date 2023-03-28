const Client = require('../models/clientModel')
const mongoose = require('mongoose')

//get all clients
const getClients = async (req, res) => {
    const clients = await Client.find({}).sort()
    res.status(200).json(clients)
}

//get a single client
const getClient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No client found'})
    }

    const client = await Client.findById(id)

    if (!client) {
        return res.status(404).json({error: 'This client was not found'})
    }

    res.status(200).json(client)
}

//add new client
const createClient = async (req, res) => {
    const {name, clientSince, primaryContact, phone, email, balance, reminders} = req.body

    try {
        const client = await Client.create({name, clientSince, primaryContact, phone, email, balance, reminders})
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a client
const deleteClient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No client found'})
    }

    const client = await Client.findByIdAndDelete({_id: id})

    if (!client) {
        return res.status(400).json({error: 'This client was not found'})
    }

    res.status(200).json(client)
}

//update a client
const updateClient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No client found'})
    }

    const client = await Client.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!client) {
        return res.status(400).json({error: 'This client was not found'})
    }

    res.status(200).json(client)
}


module.exports = {
    createClient,
    getClient,
    getClients, 
    deleteClient,
    updateClient
}