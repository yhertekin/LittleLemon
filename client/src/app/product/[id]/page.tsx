import React from "react";
import { singleProduct } from "@/data";
import "./SingleProductPage.css";
import Image from "next/image";
import Price from "@/components/Price";

const SingleProductPage = () => {
    return (
        <div className='single-product-page'>
            {singleProduct.img && (
                <div className='single-product-page__image'>
                    <Image className='object-contain' src={singleProduct.img} alt='product image' fill />
                </div>
            )}

            <div className='single-product-page__content'>
                <h1 className='single-product-page__content__title'>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
            </div>
        </div>
    );
};

export default SingleProductPage;
