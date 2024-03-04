import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<Jumbotron />
		<div className="d-flex">
		<Card />
		<Card />
		<Card />
		<Card />
		</div>
		
		</>
	);
};

export default Home;
