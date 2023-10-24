import React from "react";
import "./Featured.css";
import { featuredProducts } from "@/data";
import ProductCard from "./ProductCard";

const Featured = () => {
    return (
        <div className='featured'>
            <div className='wrapper'>
                {featuredProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default Featured;
