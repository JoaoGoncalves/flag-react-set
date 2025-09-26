
import BookList from './BookList';
import {books} from '../data.json';
import { useState } from 'react';

export default function BookDashboard() {

const [livros, setLivros] = useState(books)

//console.log(livros);

const handleDeleteBook = (id) => {
    setLivros( livros.filter( l => l.id !== id) )
}



  return (
    <section>
        <h1>BookDashboard</h1>
        <BookList books={livros} deleteBook={handleDeleteBook} />
    </section>
  );
}
