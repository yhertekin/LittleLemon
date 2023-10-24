import React from "react";
import Image from "next/image";
import { Product } from "@/data";
import "./Featured.css";

interface IProductCard {
    product: Product;
}

const ProductCard = ({ product }: IProductCard) => {
    return (
        <div className='product-card'>
            {product.img && (
                <div className='product-card__image'>
                    <Image className='object-contain' src={product.img} alt='product image' fill />
                </div>
            )}
            <div className='product-card__text-container'>
                <h1 className='text-container__title'>{product.title}</h1>
                <p className='text-container__description'>{product.desc}</p>
                <span className='text-container__price'>${product.price}</span>
                <button className='text-container__button'>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
