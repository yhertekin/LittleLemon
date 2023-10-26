import Image from "next/image";
import React from "react";
import "./CartPage.css";

const CartPage = () => {
    return (
        <div className='cart-page'>
            <div className='cart-page__products'>
                <div className='cart-page__product'>
                    <Image src='/temporary/p1.png' alt='product image' width={100} height={100} />
                    <div>
                        <h1 className='cart-page__product__title'>Scillian</h1>
                        <span className='cart-page__product__size'>Large</span>
                    </div>
                    <h2 className='cart-page__product__price'>$79.90</h2>
                    <Image
                        className='cart-page__product__remove'
                        src='/icons/Delete.svg'
                        alt='remove product'
                        width={24}
                        height={24}
                    />
                </div>
                <div className='cart-page__product'>
                    <Image src='/temporary/p1.png' alt='product image' width={100} height={100} />
                    <div>
                        <h1 className='cart-page__product__title'>Scillian</h1>
                        <span className='cart-page__product__size'>Large</span>
                    </div>
                    <h2 className='cart-page__product__price'>$79.90</h2>
                    <Image
                        className='cart-page__product__remove'
                        src='/icons/Delete.svg'
                        alt='remove product'
                        width={24}
                        height={24}
                    />
                </div>
                <div className='cart-page__product'>
                    <Image src='/temporary/p1.png' alt='product image' width={100} height={100} />
                    <div>
                        <h1 className='cart-page__product__title'>Scillian</h1>
                        <span className='cart-page__product__size'>Large</span>
                    </div>
                    <h2 className='cart-page__product__price'>$79.90</h2>
                    <Image
                        className='cart-page__product__remove'
                        src='/icons/Delete.svg'
                        alt='remove product'
                        width={24}
                        height={24}
                    />
                </div>
            </div>

            <div className='cart-page__payment'>
                <div className='flex justify-between'>
                    <span className=''>Subtotal (3 items)</span>
                    <span className=''>$81.70</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Service Cost</span>
                    <span className=''>$0.00</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Delivery Cost</span>
                    <span className='text-green-500'>FREE!</span>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between'>
                    <span className=''>TOTAL</span>
                    <span className='font-bold'>$81.70</span>
                </div>
                <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
            </div>
        </div>
    );
};

export default CartPage;
