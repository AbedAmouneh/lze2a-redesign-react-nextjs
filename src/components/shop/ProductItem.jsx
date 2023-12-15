import React, { useState } from "react";
import { products } from "../../../products";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ProductIndividual from "../Item/ProductIndividual";


function ProductItem({name, image, price, id, color, category, item}){
    const [bColor, setBColor] = useState("white")
    const [selectedNumber, setSelectedNumber] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const [eyeHovering, setEyeHovering] = useState(false)
    const [bagHovering, setBagHovering] = useState(false)
    const showHover = () => {
        setBColor(color)
        setIsHovering(true)

    }
    const hideHover = () => {
        setBColor("white")
        setIsHovering(false)
    }
    const showHoverEye = () => {
        setEyeHovering(true)
    }
    const hideHoverEye = () => {
        setEyeHovering(false)
    }
    const showHoverBag = () => {
        setBagHovering(true)
    }
    const hideHoverBag = () => {
        setBagHovering(false)
    }
    const backgroundColorStyle = {
        backgroundColor: bColor
    }
    const colorStyle = {
        color: color
    }
    const borderStyle = {
        border: "3px solid " + color
    }
    const addToCartStyle = {
        border: "1.5px solid " + color,
        backgroundColor: color
    }
    return(

        <div className={"product " + category}  onMouseEnter={showHover} onMouseLeave={hideHover}>
            <div className="img-container">

                <img src={image} alt={name} />
                <div className="background-color-item" style={backgroundColorStyle}></div>
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p style={{color:color}}>${price}.00</p>
                <button className="button-product">Add to cart 	&gt;&gt;</button>
                
            </div>
                {isHovering && (
                    <div className="DoubleButton">
                        {/* <Popup trigger=
                            {<button className="hoveredButton1" onMouseEnter={showHoverEye} onMouseLeave={hideHoverEye}> {eyeHovering &&( <img className="Eyes"src="Eyes.png" /> )} Quick View </button>}
                            position="center">
                            <ProductIndividual product={item}/>
                            <button>Click here</button>
                        </Popup> */}
                        <button className="hoveredButton1" onMouseEnter={showHoverEye} onMouseLeave={hideHoverEye}> {eyeHovering &&( <img className="Eyes"src="Eyes.png" /> )} Quick View </button>
                        <Link to={`/product/${id}`} className="hoveredButton2"  onMouseEnter={showHoverBag} onMouseLeave={hideHoverBag}> {bagHovering &&( <img className="Bag"src="Bag.png" /> )}Read More</Link>
                    </div>
                )}
        </div>
    )
} 
export default ProductItem