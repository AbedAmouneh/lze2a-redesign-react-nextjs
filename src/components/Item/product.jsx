import React, { useState } from "react";
import { products } from "../../products";
import StarFilled from "/StarFilled.svg"
import StarEmpty from "/StarEmpty.svg"
import { ReactSVG } from "react-svg";

const Product = () => {
    const [selectedNumber, setSelectedNumber] = useState(0)
    const b1 = products[0][0]
    const b2 = products[3][5]
    const colorStyle = {
        color:b2.color
    }
    const borderStyle = {
        border: "3px solid " + b2.color
    }
    const addToCartStyle = {
        border: "1.5px solid "+ b2.color,
        backgroundColor: b2.color
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
                <img src={b2.image} alt={b1.name} className="Product-Image"/>
                <div className="Product-Information">
                    <h2 >{b2.name}</h2>
                    <h3 style={colorStyle}>${b2.price}.00</h3>
                    {rating(b2.rating)}
                    <p>{b2.decription}</p>
                    <div className="Product-Buttons">
                        <div className="Number-Selector" style={borderStyle}>
                            <button onClick={()=>{setSelectedNumber(selectedNumber == 0 ? 0 : selectedNumber-1)}}>-</button>
                            {selectedNumber}
                            <button onClick={()=>{setSelectedNumber(selectedNumber+1)}}>+</button>
                        </div>
                        <button className="Add-to-Cart" style={addToCartStyle}>Add to Cart</button>
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