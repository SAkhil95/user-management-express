import express from 'express';
import { authMiddleware } from '../controllers/auth';
import { getUsers, getUser, addUser, viewUsers } from '../controllers/users';
const router = express.Router();


router.get('/', authMiddleware, getUsers);
router.get('/view-users', authMiddleware, viewUsers);
router.get('/:userId', authMiddleware, getUser);
router.post('/add-user', authMiddleware, addUser);


export default router;