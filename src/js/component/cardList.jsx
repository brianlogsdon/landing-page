import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

//create your first component
const CardList = props => {
	let cardList = props.cardArray;

	let items = cardList.map(value => (
		<Card
			key={value.title}
			title={value.title}
			text={value.text}
			button={value.button}
			image={value.image}
		/>
	));

	return <div className="row">{items}</div>;
};

CardList.propTypes = {
	cardArray: PropTypes.array
};

export default CardList;
