import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem.jsx";
import { products } from "../products.js"

function ProductList({n}) {

    return (
        <div className="item-list">
            {products[n].map((item,Index) =>(
            <ProductItem 
            key={Index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            color={item.color}
            />))}
        </div>
);
}

export default ProductList;