"use client";

import React, { useState } from "react";
import Menu from "../Menu";
import Link from "next/link";
import "./Navbar.css";
import CartIcon from "../CartIcon";

const Navbar = () => {
    const [state, setState] = useState({ user: false });
    return (
        <div className='navbar'>
            <div className='navbar__links justify-start'>
                <Link href='/'>homepage</Link>
                <Link href='/menu'>menu</Link>
                <Link href='/'>contact</Link>
            </div>
            <div className='navbar__logo'>
                <Link href='/'>Little Lemon</Link>
            </div>
            <div className='navbar__menu'>
                <Menu />
            </div>
            <div className='navbar__links justify-end'>
                {state.user ? <Link href='/orders'>orders</Link> : <Link href='/login'>login</Link>}
                <Link href='/cart' className='navbar__links__cart'>
                    <CartIcon color='red' />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
