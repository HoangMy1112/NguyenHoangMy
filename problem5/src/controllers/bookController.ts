// bookController.ts
import { Request, Response } from 'express';
import * as bookModel from '../models/bookModel';

const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookModel.getAllBooks();
        res.render('index', { books }); 
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
};

const addBook = async (req: Request, res: Response) => {
    const { title, author, pages } = req.body as { title: string; author: string; pages: number };
    try {
        if (!title || !author || !pages) {
        throw new Error('Title, author, and pages are required.');
        }
        await bookModel.addBook(title, author, pages);
        res.redirect('/books'); 
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
};
  
const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, author, pages } = req.body as { title: string; author: string; pages: number };
    try {
        if (!title || !author || !pages) {
        throw new Error('Title, author, and pages are required.');
        }
        await bookModel.updateBook(parseInt(id), title, author, pages);
        // res.redirect('/books');
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
};
  
const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await bookModel.deleteBook(parseInt(id));
        res.redirect('/books');
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
};

export { getAllBooks, addBook, updateBook, deleteBook };