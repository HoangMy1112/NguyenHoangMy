import express from 'express';
import * as bookController from '../controllers/bookController';

const router = express.Router();

router.get('/', bookController.getAllBooks);

router.post('/', bookController.addBook);

router.post('/update/:id', bookController.updateBook);

router.post('/delete/:id', bookController.deleteBook);

export default router;
