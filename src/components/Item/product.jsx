import React, { useState } from "react";
import { products } from "../../../products";
import StarFilled from "/StarFilled.svg"
import StarEmpty from "/StarEmpty.svg"
import { ReactSVG } from "react-svg";
import { useParams } from 'react-router-dom';

const Product = () => {

    const findProduct = (id, arr) => {
        let item
        for (let i = 0; i < arr.length; i++) {
            item = arr[i].find(j => j.id === parseInt(id, 10));
            if (item) {
                break
            }
        }
        return item
    }
    const { id } = useParams();
    const product = findProduct(id, products)
    const [selectedNumber, setSelectedNumber] = useState(0)
    console.log(products)
    console.log(product)
    const colorStyle = {
        color: product.color
    }
    const borderStyle = {
        border: "3px solid " + product.color
    }
    const addToCartStyle = {
        border: "1.5px solid " + product.color,
        backgroundColor: product.color
    }
    const rating = (n) => {
        
        return (
            <div className="Rating-Container" style={colorStyle}>
                <ReactSVG src={n > 0 ? StarFilled : StarEmpty}/>
                <ReactSVG src={n > 1 ? StarFilled : StarEmpty}/>
                <ReactSVG src={n > 2 ? StarFilled : StarEmpty}/>
                <ReactSVG src={n > 3 ? StarFilled : StarEmpty}/>
                <ReactSVG src={n > 4 ? StarFilled : StarEmpty}/>
            </div>
        )
    }
    return (
        <>
            <div className="Product-Container">
                <img src={product.image} alt={product.name} className="Product-Image"/>
                <div className="Product-Information">
                    <h2 >{product.name}</h2>
                    <h3 style={colorStyle}>${product.price}.00</h3>
                    {rating(product.rating)}
                    <p>{product.decription}</p>
                    <div className="Product-Buttons">
                        <div className="Number-Selector" style={borderStyle}>
                            <button onClick={()=>{setSelectedNumber(selectedNumber == 0 ? 0 : selectedNumber-1)}}>-</button>
                            {selectedNumber}
                            <button onClick={()=>{setSelectedNumber(selectedNumber+1)}}>+</button>
                        </div>
                        <button className="Add-to-Cart" style={addToCartStyle}>Add to Cart</button>
                        <button className="Customize-btn" style={addToCartStyle}>Customize</button>
                    </div>
                </div>
            </div>
            <div className="Similar-Products">
                <h4>—————— &nbsp; Similar Products &nbsp; ——————</h4>
            </div>
        </>
    )
}

export default Product