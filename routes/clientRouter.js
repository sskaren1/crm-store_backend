// "Express" import
import express from 'express';
// Controllers import
import { newClient, getAllClients } from './../controllers/clientController.js'

// Configure routes
const router = express.Router();

// Add new customers
router.post("/", newClient);
// Get all clients
router.get("/", getAllClients);


export default router;
