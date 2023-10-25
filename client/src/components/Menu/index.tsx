"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./Menu.css";
import CartIcon from "../CartIcon";

const navigationLinks = [
    { id: 1, title: "homepage", url: "/" },
    { id: 2, title: "menu", url: "/menu" },
    { id: 3, title: "working hours", url: "/" },
    { id: 4, title: "contact", url: "/" },
];

const Menu = () => {
    const [state, setState] = useState({
        open: false,
        user: false,
    });

    const menuHandler = () => setState((prevState) => ({ ...prevState, open: !prevState.open }));

    return (
        <div className='menu'>
            {state.open ? (
                <Image src='/icons/Close.svg' width={24} height={24} alt='menu icon' onClick={menuHandler} />
            ) : (
                <Image src='/icons/Menu.svg' width={24} height={24} alt='menu icon' onClick={menuHandler} />
            )}

            {state.open && (
                <div className='menu__nav'>
                    {navigationLinks.map((link) => (
                        <Link href={link.url} key={link.id} className='menu__nav__link' onClick={menuHandler}>
                            {link.title}
                        </Link>
                    ))}
                    {state.user ? (
                        <Link className='menu__nav__link' href='/orders' onClick={menuHandler}>
                            Orders
                        </Link>
                    ) : (
                        <Link className='menu__nav__link' href='/login' onClick={menuHandler}>
                            Login
                        </Link>
                    )}
                    <Link href='/cart' onClick={menuHandler}>
                        <CartIcon />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
