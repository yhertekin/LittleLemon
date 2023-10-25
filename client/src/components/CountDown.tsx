"use client";

import Countdown from "react-countdown";

const endDate = new Date("2023-12-25");

const CountDown = () => {
    return <Countdown date={endDate} className='font-bold text-5xl text-yellow-500' />;
};

export default CountDown;
