import { useState } from 'react'
import './App.scss'
import Shop from './components/shop/Shop.jsx'
import Product from './components/Item/product.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Shop/>} />
                    <Route path="/product/:id" element={<Product/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
