import React, { useState } from "react";
import { products } from "../../../products";
import { Link } from 'react-router-dom';


function ProductItem({name, image, price, id, color, category}){
    const [bColor, setBColor] = useState("white")
    const showHover = () => {
        setBColor(color)
    }
    const hideHover = () => {
        setBColor("white")
    }
    const backgroundColorStyle = {
        backgroundColor: bColor
    }
    return(
        //<Link to={`/product/${id}`}>
        <div className={"product " + category} onMouseEnter={showHover} onMouseLeave={hideHover}>
            <div className="img-container">
                <img src={image} alt={name} />
                <div className="background-color-item" style={backgroundColorStyle}></div>
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p style={{color:color}}>${price}.00</p>
                <button className="button-product">Add to cart 	&gt;&gt;</button>
            </div>
        </div>
        //</Link>
    )
} 
export default ProductItem