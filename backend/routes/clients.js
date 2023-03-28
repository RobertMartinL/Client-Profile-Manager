const express = require('express')
const {createClient, getClient, getClients, deleteClient, updateClient} = require('../controllers/clientController')

const router = express.Router()

router.get('/', getClients)

router.get('/:id', getClient)

router.post('/', createClient)

router.delete('/:id', deleteClient)

router.patch('/:id', updateClient)

module.exports = router