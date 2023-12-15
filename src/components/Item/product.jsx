import React, { useState } from "react";
import { products } from "../../../products";
import StarFilled from "/StarFilled.svg"
import StarEmpty from "/StarEmpty.svg"
import { ReactSVG } from "react-svg";
import { useParams } from 'react-router-dom';
import ProductItem from "../shop/ProductItem";
import ProductIndividual from "./ProductIndividual";

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
    
    const getFeaturedArray = (product) => {
        let arr = []
        for (let i = 0; i < products.length; i++) {
            for (let j = 0; j < products[i].length; j++) {
                if (products[i][j].id != product.id && products[i][j].category == product.category){
                    arr.push(products[i][j])
                }
            }
        }
        return arr.splice(0,4)
    }
    return (
        <>
            <ProductIndividual product={product}/>
            <div className="Similar-Products">
                <div className="TranslateY">——— &nbsp; </div><h1> Similar Products </h1><div className="TranslateY">&nbsp; ———</div>
            </div>
            <div className="Featured-row">{getFeaturedArray(product).map((item,Index) =>(
            <ProductItem 
                key={Index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                color={item.color}
                category={item.category}
            />))}</div>
        </>
    )
}

export default Product