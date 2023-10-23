"use client";
import Image from "next/image";
import React, { useState } from "react";

const Menu = () => {
	const [open, setOpen] = useState(false);

	function menuHandler() {
		alert("hello");
	}

	return (
		<div>
			<button onClick={menuHandler}>click</button>
			{open ? (
				<Image src="/close.svg" width={24} height={24} alt="menu icon" onClick={menuHandler} />
			) : (
				<Image src="/menuOpen.svg" width={24} height={24} alt="menu icon" onClick={menuHandler} />
			)}
		</div>
	);
};

export default Menu;
