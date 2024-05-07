# Book Management System

This is a simple web application for managing a list of books. It allows users to view, add, update, and delete books.

## Features

- View a list of books with their titles, authors, and page counts.
- Add a new book to the list.
- Update the information of an existing book.
- Delete a book from the list.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Template Engine**: Pug (optional)
- **Language**: TypeScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/book-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd problem5
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npx ts-node src/app.ts
   ```

5. Open your web browser and navigate to `http://localhost:3000/books` to access the application.

## Usage

- **View Books**: Upon opening the application, you'll see a list of books displayed in a table format.
- **Add Book**: Click the "Add Book" button to add a new book to the list. Fill in the required information and click "Add".
- **Update Book**: Click the "Update" button next to a book to edit its information. Update the fields and click "Submit" again to save the changes.
- **Delete Book**: Click the "Delete" button next to a book to remove it from the list.