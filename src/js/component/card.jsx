import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card cardStyle">
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href="#" className="btn btn-primary">
						{props.button}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string,
	image: PropTypes.string
};

export default Card;
