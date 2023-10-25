import React from "react";
import { pizzas } from "@/data";
import "./CategoryPage.css";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
    return (
        <div className='category-page'>
            {pizzas.map((item) => (
                <Link className='category-page__link group' href={`/product/${item.id}`} key={item.id}>
                    {item.img && (
                        <div className='relative h-[80%]'>
                            <Image className='object-contain' src={item.img} alt='' fill />
                        </div>
                    )}

                    <div className='category-page__link__container'>
                        <h1 className='category-page__link__container__title '>{item.title}</h1>
                        <h2 className='category-page__link__container__price group-hover:hidden'>${item.price}</h2>
                        <button className='category-page__link__container__button group-hover:block'>
                            Add to Cart
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryPage;
