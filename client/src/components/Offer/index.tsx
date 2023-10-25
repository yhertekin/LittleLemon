import React from "react";
import "./Offer.css";
import Image from "next/image";
import CountDown from "../CountDown";

const Offer = () => {
    return (
        <div className='offer'>
            <div className='offer__text-container'>
                <h1 className='offer__text-container__title'>Delicious Burger & French Fry</h1>
                <p className='offer__text-container__text'>
                    Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly
                    pontificate parallel.
                </p>
                <CountDown />
                <button className='offer__text-container__button'>Order Now</button>
            </div>
            <div className='offer__image-container'>
                <Image src='/images/offerProduct.png' alt='offer product' fill className='object-contain' />
            </div>
        </div>
    );
};

export default Offer;
