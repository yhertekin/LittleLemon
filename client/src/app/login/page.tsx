import React from "react";
import "./LoginPage.css";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='login-page__container'>
                <div className='login-page__container__image'>
                    <Image className='object-cover' src='/images/loginBg.png' alt='' fill />
                </div>
                <div className='login-page__container__form'>
                    <h1 className='login-page__container__form__title'>Welcome</h1>
                    <p>Login to your account or create a new one using social buttons</p>

                    <button className='login-page__container__form__social'>
                        <Image
                            className='object-contain'
                            src='/images/google.png'
                            alt='google'
                            width={20}
                            height={20}
                        />
                        <span>Sign in with Google</span>
                    </button>
                    <button className='login-page__container__form__social'>
                        <Image
                            className='object-contain'
                            src='/images/facebook.png'
                            alt='facebook'
                            width={20}
                            height={20}
                        />
                        <span>Sign in with Facebook</span>
                    </button>
                    <p className='text-sm'>
                        Have a problem?
                        <Link className='underline' href='/'>
                            {" "}
                            Contact us
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
