import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Scribble from "/Scribble.svg"
import { ReactSVG } from "react-svg";
import { ShopTitle } from "./title";

function Shop() {
  return (
    <>
        <div className="title-container">
            <ReactSVG src={Scribble}></ReactSVG>
            <p id="titleofthepage">PRODUCTS</p>
        </div> 
        <div className="shop-container">
        <ShopTitle>Bottles</ShopTitle>
            <div className="shop-row">
                <ProductList n={0} />
            </div>
            <ShopTitle>Tumblers</ShopTitle>
            <div className="shop-row">
                <ProductList n={1} />
            </div>
            <ShopTitle>Mirrors</ShopTitle>
            <div className="shop-row">
                <ProductList n={2} />
            </div>
            <ShopTitle>Earrings</ShopTitle>
            <div className="shop-row">
                <ProductList n={3} />
            </div>
            <ShopTitle>Pop Sockets</ShopTitle>
            <div className="shop-row">
                <ProductList n={4} />
            </div>
            <ShopTitle>Pouches</ShopTitle>
            <div className="shop-row">
                <ProductList n={5} />
            </div>
            <ShopTitle>Tote Bags</ShopTitle>
            <div className="shop-row">
                <ProductList n={6} />
            </div>
            <ShopTitle>Magnets</ShopTitle>
            <div className="shop-row">
                <ProductList n={7} />
            </div>
        </div>
    </>
  );
}
export default Shop;
