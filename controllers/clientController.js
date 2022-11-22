// Client model import
import { queryAllClients, queryClientById } from './../models/Clients.js';

// Add new customers
export const newClient = async(req, res, next) => {
    // console.log(req.body);
    const client = new Clients(req.body);

    try {        
        await client.save();// Store record
        res.json({ message:'Se agrego el nuevo cliente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// Get all clients
export const getAllClients = async(req, res, next) =>{
    try {
        const clients = await queryAllClients();
        res.json(clients);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Show a specific client by id
export const getClientById = async(req, res, next) => {
    const client = await queryClientById(req);

    if (!client) {
        res.json({ message: "Ese cliente no existe" })
    }

    res.json(client); //show client
}

