import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import CardList from "./cardList.jsx";

//card

const cardArray = [
	{
		title: "Title of first card",
		text: "texttext in the body",
		button: "button",
		image: rigoImage
	},
	{
		title: "Title of second card",
		text: "texttext in the body",
		button: "button",
		image: rigoImage
	},
	{
		title: "Title of third card",
		text: "texttext in the body",
		button: "button",
		image: rigoImage
	},
	{
		title: "Title of fourth card",
		text: "texttext in the body",
		button: "button",
		image: rigoImage
	}
];

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container-fluid">
				<Navbar />
			</div>
			<div className="container">
				<Jumbotron />

				<CardList cardArray={cardArray} />
			</div>
			<div className="container-fluid">
				<Footer />
			</div>
		</div>
	);
};
export default Home;
