// Moongose import
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const clientsSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    empresa: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
});

const Clients = mongoose.model("Clientes", clientsSchema);

export const queryAllClients = async ()=>{
    return await Clients.find({});
}

export const queryClientById  = async (req)=>{
    return await Clients.findById(req.params.idClient);
}

