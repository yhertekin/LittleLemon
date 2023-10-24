import Link from "next/link";
import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <Link href='/' className='footer__logo'>
                Little Lemon
            </Link>
            <p className='footer__copy'>&copy; all rights reserved</p>
        </div>
    );
};

export default Footer;
