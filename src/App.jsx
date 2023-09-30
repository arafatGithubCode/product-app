import React from "react";
import { ReactDOM } from "react";
import Product from "./components/Product.jsx";
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        id : uuidv4(),
        url : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price : "Price: $109.95",
        rating : "Rating: 3.9/5",
        desc : "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        btn : "Add to cart"
    },
    {
        id : uuidv4(),
        url : "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        title : "Mens Casual Premium Slim Fit T-Shirts",
        price : "Price: $22.3",
        rating : "Rating: 4.1/5",
        desc : `Description: Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric
        for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket`,
        btn : "Add to cart"
    },
    {
        id : uuidv4(),
        url : "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price : "Price: $109.95",
        rating : "Rating: 3.9/5",
        desc : "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        btn : "Add to cart"
    },
    {
        id : uuidv4(),
        url : "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price : "Price: $109.95",
        rating : "Rating: 3.9/5",
        desc : "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        btn : "Add to cart"
    },
    {
        id : uuidv4(),
        url : "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price : "Price: $109.95",
        rating : "Rating: 3.9/5",
        desc : "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        btn : "Add to cart"
    },
    {
        id : uuidv4(),
        url : "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price : "Price: $109.95",
        rating : "Rating: 3.9/5",
        desc : "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        btn : "Add to cart"
    }
];

const pItems = data.map((pItem) => {
    const {id, url, title, price, rating, desc, btn} = pItem;
    return  <div key={uuidv4()}>

                    <Product 
                    id = {id}
                    url = {url}
                    title = {title}
                    price = {price}
                    rating = {rating}
                    desc = {desc}
                    btn = {btn} />

            </div>
})

const App = () => {
    return <div>

                <header>
                    <h1 className="text-center bg-secondary text-white py-2">BD Store</h1>
                </header>

                <main>
                        <div className="product_cart">
                            {pItems}
                        </div>
                </main>

           </div>
}
export default App;