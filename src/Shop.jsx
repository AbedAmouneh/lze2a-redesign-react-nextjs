import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Shop() {
  return (
    <>
        <div><p id="titleofthepage">PRODUCTS</p></div> 
        <div className="shop-container">
            <div className="TranslateY">———— &nbsp; </div><h1> Bottles </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={0} />
            </div>
            <div className="TranslateY">———— &nbsp; </div><h1> Tumblers </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={1} />
            </div>
            <div className="TranslateY">———— &nbsp; </div><h1>  Mirrors </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={2} />
            </div>
            <div className="TranslateY">———— &nbsp; </div><h1> Earrings </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={3} />
            </div>
            <div className="TranslateY">———— &nbsp; </div><h1> Pop Sockets </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={4} />
            </div>
            <div className="TranslateY">———— &nbsp; </div><h1> Pouches </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={5} />
            </div>
            <div className="TranslateY">———— &nbsp; </div><h1> Tote Bags </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={6} />
            </div>
            <div className="TranslateY">———— &nbsp; </div><h1> Magnets </h1><div className="TranslateY">&nbsp; ————</div>
            <div className="shop-row">
                <ProductList n={7} />
            </div>
        </div>
    </>
  );
}
export default Shop;
