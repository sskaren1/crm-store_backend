import Clients from './../models/Clients.js';

export const newClient = async(req, res, next) => {
    console.log(req.body);
    const client = new Clients(req.body);

    try {
        // Store record
        await client.save();
        res.json({ mensaje:'Se agrego el nuevo cliente' });
    } catch (error) {
        console.log(error);
        next();
    }
}


