"use client";

import React, { useState, useEffect } from "react";
import "./Slider.css";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "always fresh & crispy & hot",
        image: "/images/slide1.png",
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "/images/slide2.png",
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/images/slide3.jpg",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide((prevState) => (prevState + 1) % 3), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slider'>
            <div className='text-container'>
                <h1 className='text-container__title'>{slides[currentSlide].title}</h1>
                <button className='text-container__button'>Order Now</button>
            </div>
            <div className='image-container'>
                <Image src={slides[currentSlide].image} alt='slider image' fill className='image-container__image' />
            </div>
        </div>
    );
};

export default Slider;
