import React from "react";
import { menu } from "@/data";
import "./MenuPage.css";
import Link from "next/link";

const MenuPage = () => {
    return (
        <div className='menu'>
            {menu.map((category) => (
                <Link
                    className='menu__link'
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    style={{ backgroundImage: `url(${category.img})` }}
                >
                    <div className='menu__link__body' style={{ color: category.color }}>
                        <h1 className='menu__link__body__title'>{category.title}</h1>
                        <p className='menu__link__body__text'>{category.desc}</p>
                        <button
                            className='menu__link__body__button'
                            style={{
                                backgroundColor: category.color,
                                color: category.color == "black" ? "white" : "#ef4444",
                            }}
                        >
                            Explore
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuPage;
