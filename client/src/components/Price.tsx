"use client";

import React, { useEffect, useState } from "react";

interface IPrice {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({ price, id, options }: IPrice) => {
    const [state, setState] = useState({
        total: price,
        quantity: 1,
        selected: 0,
    });

    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            total: prevState.quantity * (options ? price + options[prevState.selected].additionalPrice : 1),
        }));
    }, [state.quantity, state.selected]);

    const setSelected = (index: number) => {
        setState((prevState) => ({ ...prevState, selected: index }));
    };

    const setQuantity = (option: "increase" | "decrease") => {
        switch (option) {
            case "decrease":
                setState((prevState) => ({
                    ...prevState,
                    quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1,
                }));
                break;

            case "increase":
                setState((prevState) => ({
                    ...prevState,
                    quantity: prevState.quantity < 9 ? prevState.quantity + 1 : 9,
                }));
                break;
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>${state.total.toFixed(2)}</h2>
            {/* OPTIONS CONTAINER */}
            <div className='flex gap-4'>
                {options?.map((option, index) => (
                    <button
                        key={option.title}
                        className='min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md'
                        style={{
                            background: state.selected === index ? "rgb(239 68 68)" : "white",
                            color: state.selected === index ? "white" : "rgb(239 68 68)",
                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>
            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className='flex justify-between items-center'>
                {/* QUANTITY */}
                <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                    <span>Quantity</span>
                    <div className='flex gap-4 items-center'>
                        <button onClick={() => setQuantity("decrease")}>{"<"}</button>
                        <span>{state.quantity}</span>
                        <button onClick={() => setQuantity("increase")}>{">"}</button>
                    </div>
                </div>
                {/* CART BUTTON */}
                <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Price;
