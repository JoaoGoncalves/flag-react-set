import Product from "./Product";
import { products } from "../seeds";
import { useState } from "react";

export default function ProductList() {
  //Hooks
  const [prods, setProds] = useState(products);
  const [descendent, setDescendent] = useState(true);


  const handleProductVote = (id, vote) => {
    const updatedproducts = prods.map((p) => {
      if (p.id === id) {
        return { ...p, votes: p.votes + vote };
      } else {
        return p;
      }
    });

    setProds(updatedproducts);
  };

  const handleSort = () => {
    setDescendent( !descendent );
    
  }

  //const sortedproducts = prods.sort((a, b) => a.votes - b.votes);
  const sortedproducts = prods.sort(
    (a, b) => descendent ?  (b.votes - a.votes) : (a.votes - b.votes)
  );

  const productComponents = sortedproducts.map((p) => (
    <Product
      key={p.id}
      /* {...p} */
      id={p.id}
      title={p.title}
      description={p.description}
      url={p.url}
      votes={p.votes}
      productImageUrl={p.productImageUrl}
      submitterAvatarUrl={p.submitterAvatarUrl}
      handleVote={handleProductVote}
    />
  ));

  return (
    <section className="ui unstackable items">
      
        <button onClick={handleSort}> Up / down </button>
     
      {productComponents}
    </section>
  );
}

