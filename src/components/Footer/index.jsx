import Nav from "./../Nav";

const Footer = () => {
	return (
		<footer className="footer">
			<div></div>
			<div>
				<h6>Doormat Navigation</h6>
				<Nav />
			</div>
			<div>
				<h6>Contact</h6>
				<address>
					<div>address</div>
					<a href="mailto:john@doe.com">john@doe.com</a>
					<br />
					<a href="tel:+1234567891">(123) 456-7891</a>
				</address>
			</div>
			<div>
				<h6>Social Meida Links</h6>
				<address>
					<a href="/#">instagram</a>
				</address>
			</div>
		</footer>
	);
};

export default Footer;
