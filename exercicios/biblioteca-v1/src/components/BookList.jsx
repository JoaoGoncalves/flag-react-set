import React from 'react';
import Book from './Book';

export default function BookList({books, deleteBook}) {

    //const {books} = props;

  return (
   <section className='grid'>
    {
        books.map ( b => (
            <Book key={b.id} book={b} deleteBook={deleteBook} />
        ))
    }
   </section>
  );
}
