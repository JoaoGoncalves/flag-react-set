import Product from "./Product";
import {products} from '../seeds';
import { useState } from "react";


export default function ProductList() {


  //Hooks
  const [prods, setProds] = useState(products);

  const handleProductUpVote = (id ) => {

    const updatedproducts = prods.map( p => {
      if(p.id === id ) {
        return {... p , votes: p.votes + 1};
      } else {
        return p;
      }
    })

    setProds(updatedproducts);


   // console.log(`Foi votado o produto com id: ${id}`);

   /*  products.map( p => {
      if(p.id === id ){
        p.votes = p.votes + 1;
        debugger;
      }
    }) */


  }

    //console.log(products);
    //const product = products[2];
    //console.log(product);

    const sortedproducts = prods.sort( (a, b) => (b.votes - a.votes) )

    const productComponents = sortedproducts.map( p => (
        <Product 
            key = {p.id}
            /* {...p} */
            id = {p.id}
            title = {p.title}
            description = {p.description}
            url = {p.url}
            votes = {p.votes}
            productImageUrl = {p.productImageUrl}
            submitterAvatarUrl = {p.submitterAvatarUrl}

            handleVote = {handleProductUpVote}
        />
    ) )

  return (
    <section className="ui unstackable items">
      <p> <button> Up / down </button></p>
       {productComponents}
    </section>
  );
}
