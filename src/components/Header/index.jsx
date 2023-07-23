import Nav from "./../Nav";
import { ReactComponent as Logo } from "./../../assets/Logo.svg";

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<Nav />
		</header>
	);
};

export default Header;
