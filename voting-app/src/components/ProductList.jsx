import Product from "./Product";
import {products} from '../seeds';


export default function ProductList() {


    //console.log(products);
    //const product = products[2];
    //console.log(product);

    const productComponents = products.map( p => (
        <Product 
            key = {p.id}
            id = {p.id}
            title = {p.title}
            description = {p.description}
            url = {p.url}
            votes = {p.votes}
            productImageUrl = {p.productImageUrl}
            submitterAvatarUrl = {p.submitterAvatarUrl}
        />
    ) )

    


  return (
    <section className="ui unstackable items">
       {productComponents}
    </section>
  );
}
