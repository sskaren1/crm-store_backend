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

export default Clients;
