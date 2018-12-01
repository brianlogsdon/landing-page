import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Footer = () => {
	return (
		<div className="container-fluid footer-style ">
			<div className="footer-copyright text-center py-3 bg-dark text-light">
				&copy; {new Date().getFullYear()} Copyright:
				{"4geeks "}
			</div>
		</div>
	);
};
/*
Navbar.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string
};
*/
export default Footer;
