import express from 'express';
import * as usersController from "../../controllers/users/users-controller.js"
const router = express.Router();



//seed (represent '/users/seed' from server.js)
router.get('/seed', usersController.seedUsers);
//index (represent '/users' from server.js)
router.get('/', usersController.getUsers);
//delete
router.delete('/:id', usersController.deleteUsers);
//update
router.put('/:id', usersController.updateUsers);
//create
router.post('/', usersController.createUsers);
//show
router.get('/:id', usersController.getUser);

export default router;
