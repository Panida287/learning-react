import { useState } from 'react';

const products = [
    { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
    { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
    { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
    { id: 3, title: 'Water', price: 15.99, isOnSale: true },
];
function App() {
    return (
        <div>
            <h2>On Sale Products</h2>
            <ul>
                {products.map((product) =>
                    product.isOnSale ? (
                        <li key={product.id}>
                            {product.title} - ${product.price}
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    );
}


export default App;

