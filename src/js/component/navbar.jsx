import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse ml-auto" id="navbarNav">
				<ul className="navbar-nav ">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
/*
Navbar.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string
};
*/
export default Navbar;
