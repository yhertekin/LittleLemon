import React from "react";
import Menu from "../Menu";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div>
				<Link href="/">Little Lemon</Link>
			</div>
			<div>
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
