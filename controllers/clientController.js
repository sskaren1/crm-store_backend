// Client model import
import Clients from './../models/Clients.js';

// Add new customers
export const newClient = async(req, res, next) => {
    // console.log(req.body);
    const client = new Clients(req.body);

    try {        
        await client.save();// Store record
        res.json({ mensaje:'Se agrego el nuevo cliente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// Get all clients
export const getAllClients = async(req, res, next) =>{
    try {
        const clients = await Clients.find({})
        res.json(clients)
    } catch (error) {
        console.log(error);
        next();
    }
}


