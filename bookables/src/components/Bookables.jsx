import { useState } from "react";
import { bookables } from "../db.json";

export default function Bookables() {
  const [bookableIndex, setbookableIndex] = useState(0);
  const [group, setGroup] = useState("Rooms");
  const [hasDetails, setHasDetails] = useState(true);

  //const group = "Rooms";
  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const nextBookable = () => {
    //setbookableIndex( (bookableIndex + 1) % bookablesInGroup.length)

    setbookableIndex((index) => (index + 1) % bookablesInGroup.length);
    // usar o setter para atualizar o state, devera ficar numa funcao para delegar a execução dessa atualização ao react
  };

  //const groups = bookables.map( b => b.group);
  const groups = [...new Set(bookables.map((b) => b.group))];

  const bookable = bookablesInGroup[bookableIndex];

  const changeGroup = (e) => {
    setGroup(e.target.value);
    setbookableIndex(0);
  }

  return (
    <>
      <section>
        {/* <select value={group} onChange={ e => setGroup(e.target.value) }> */}
        <select
          value={group}
          onChange={changeGroup}
        >
          {groups.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookables">
          {bookablesInGroup.map((b, i) => (
            <li
              key={b.id}
              className={bookableIndex === i ? "selected" : null}
              onClick={() => setbookableIndex(i)}
            >
              {b.title}
            </li>
          ))}
        </ul>
        <p>
          <button onClick={nextBookable}>next</button>
        </p>
      </section>

      <section>
        <p>
          <label htmlFor="details">Show Details:</label>
          <input 
            type="checkbox" 
            id="details" 
            checked={hasDetails} 
            onChange={ e => setHasDetails(e.target.checked)} 
          />
        </p>
          {/* Conditional rendering */}
          { 
            hasDetails && (
               <article>
                <h2>{bookable.title}</h2>
                <h3>{bookable.notes}</h3>
              </article>
            )
          }

      </section>
    </>
  );
}

/* let arr = [1,2,3];
let arr2 = arr;  /// copy by reference
let arr3 = [...arr]; // copy by value (clone)


console.log('arr:', arr);
console.log('arr2:', arr2);
console.log('arr3:', arr3);

arr.push(4);
console.log('arr:', arr);
console.log('arr2:', arr2);
console.log('arr3:', arr3);

arr2.push(5);
console.log('arr:', arr);
console.log('arr2:', arr2);
console.log('arr3:', arr3); */

/* let arr = [1,2,3,4];
let outraArrr = ['ola', 23, 100];

let novaArr = [...arr, ...outraArrr];

console.log(novaArr); */

/* const obj = { nome: "joao" , apelido: 'Goncalves'};

const cloneObj = {...obj}; //ES9 */
