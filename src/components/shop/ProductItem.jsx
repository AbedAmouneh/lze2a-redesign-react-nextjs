import React, { useState } from "react";
import { products } from "../../../products";
import { Link } from 'react-router-dom';


function ProductItem({name, image, price, id, color, category}){
    const [bColor, setBColor] = useState("white")
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

    return(

        <div className={"product " + category}  onMouseEnter={showHover} onMouseLeave={hideHover}>
            <div className="img-container">

                <img src={image} alt={name} />
                {isHovering && (
                   <div className="DoubleButton"> 
                    <button className="hoveredButton1" onMouseEnter={showHoverEye} onMouseLeave={hideHoverEye}> {eyeHovering &&( <img className="Eyes"src="Eyes.png" /> )} Quick View </button> 
                   <Link to={`/product/${id}`} className="hoveredButton2"  onMouseEnter={showHoverBag} onMouseLeave={hideHoverBag}> {bagHovering &&( <img className="Bag"src="Bag.png" /> )}Read More</Link>
                   </div>
                )}
                <div className="background-color-item" style={backgroundColorStyle}></div>
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