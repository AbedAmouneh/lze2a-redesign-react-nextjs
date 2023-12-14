import React from "react";
import { products } from "../products";


function ProductItem({name, image, price, id, color}){

    return(

            <div className="product">
                <div className="img-container">
                    <img src={image} alt={name} />
                    <div className="background-color-item"></div>
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <p style={{color:color}}>${price}.00</p>
                    <button className="button-product">Add to cart 	&gt;&gt;</button>
                </div>
            </div>
    )
} 
export default ProductItem