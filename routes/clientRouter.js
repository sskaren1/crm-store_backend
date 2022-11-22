// "Express" import
import express from 'express';
// Controllers import
import { newClient, getAllClients, getClientById } from './../controllers/clientController.js'

// Configure routes
const router = express.Router();

// Add new customers
router.post("/", newClient);
// Get all clients
router.get("/", getAllClients);
// Show a specific client by id
router.get("/:idClient", getClientById);

export default router;
