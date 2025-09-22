
import { useState } from 'react';
import {bookables} from '../db.json';

export default function Bookables() {
  //console.log(bookables);

  const [bookableIndex, setbookableIndex] = useState(0)
  // hoook useState(), metodo que retorna uma array com 2 elementos, o 1º a variavell do state, o 2º o metodo para atualizar essa variavel.
  // cada vez que a variavel é atualizada oa view é feito o rerender da mesma, 
  // parametro do useState, é o valor inicial da variavel

  const group = "Kit";

  const bookablesInGroup = bookables.filter( b => b.group === group );

  //let bookableIndex = 0;

  /* const changeBookable = (selectedIndex) => {
    bookableIndex = selectedIndex;

    console.log(bookableIndex);
  } */

  /* const bookableInGroupList = bookablesInGroup.map(
    (b) => <li>{b.title}</li>
  );

  return (
    <ul className="bookables">
      {bookableInGroupList}
    </ul>
  ); */

  return (
    <section>
      <h1>titulo</h1>
      <header>
        <h2>Total de items : {bookablesInGroup.length}</h2>
        <h1> Item selecionado : {bookablesInGroup[bookableIndex].title}</h1>
      </header>
      <ul className='bookables'>
          { 
            bookablesInGroup.map( (b, i) => (
              <li key={b.id} className={bookableIndex === i ? 'selected' : null } onClick={ () => setbookableIndex(i) }>
                {b.title}
              </li>
            ))
          }
          {/* { 
            bookablesInGroup.map( 
              function (b) {
                return (
                  <li>{b.title}</li>
                )
              }
            )
          } */}
      </ul>
    </section>
  );
}




