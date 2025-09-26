import React from 'react';

export default function Book({book, deleteBook}) {

    let {id, title, author, imageUrl , alreadyRead} = book;



  return (
    <article>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <img src={`./livros/${imageUrl}`} alt="titulo" />
        <p>Already Read: {alreadyRead ? '✅' : '❌'}  </p>
        <button onClick={ () => deleteBook(id)}>Delete</button>
    </article>
  );
}
