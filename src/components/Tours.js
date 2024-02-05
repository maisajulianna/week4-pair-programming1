import { useState } from 'react';
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

function Tours() {
	const [toursData, setToursData] = useState(tours);
	return (
		<div>
			<section className="section" id="tours">
				<Title title="featured" span="tours" />
				<div className="section-center featured-center">
					{toursData.map((tour) => (
						<Tour key={tour.id} {...tour}
						 />
					))}
				</div>
			</section>
		</div>
	);
};

export default Tours;


/*
const [Tours, setTours] = useState(Tours);

  const handleDeleteTour = (tourId) => {
    // Filter out the item with the specified ID and update the state
    const updatedTours = Tours.filter((tour) => tour.id !== tourId);
    setTours(updatedTours);
  }; */