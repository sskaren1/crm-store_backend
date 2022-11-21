// "Express" import
import express from 'express';
// Controllers import
import { newClient } from './../controllers/clientController.js'

// Configure routes
const router = express.Router();

// Get all clients
router.get("/clients", newClient);
// Add new customers
router.post("/clients", newClient);

export default router;
