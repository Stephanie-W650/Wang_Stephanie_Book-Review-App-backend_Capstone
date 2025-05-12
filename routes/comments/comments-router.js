import express from 'express';
import * as commentsController from '../../controllers/comments/comments-controller.js'

const router = express.Router();


router.get('/seed', commentsController.seedComments)


router.get('/', commentsController.getComments)
    
router.post('/', commentsController.createComments)

router.put('/:id', commentsController.updateComments)

export default router;

