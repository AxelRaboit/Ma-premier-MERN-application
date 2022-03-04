import express from 'express';
import { 
    addRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom
} from '../controllers/roomController.js';

// Path avec ES module pour faire fonctionner filename, dirname, etc... avec l'utilisation des imports moderne
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//Creation du router via express
const router = express.Router();

//Route pour créer une room
router.post('/api/rooms', addRoom)

//Route pour récuperer les rooms
router.get('/api/rooms', getRooms)

//Route pour récuperer une chambre par son id
router.get('/api/rooms/:id', getRoom)

//Route pour update une chambre par son id
router.patch('/api/rooms/:id', updateRoom)

//Route pour delete une chambre par son id
router.delete('/api/rooms/:id', deleteRoom)

export default router;
