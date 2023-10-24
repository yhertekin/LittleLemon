import Link from "next/link";
import React from "react";
import "./CartIcon.css";
import Image from "next/image";

type TColor = "red" | "white";

interface ICartIcon {
    color?: TColor;
}

const CartIcon = ({ color }: ICartIcon) => {
    return (
        <div className='cart-icon'>
            <div className='cart-icon__img'>
                {color == "red" ? (
                    <Image src='/icons/ShoppingCartRed.svg' className='text-white' alt='shopping cart' fill />
                ) : (
                    <Image src='/icons/ShoppingCart.svg' className='text-white' alt='shopping cart' fill />
                )}
            </div>
            <span>cart (3)</span>
        </div>
    );
};

export default CartIcon;
