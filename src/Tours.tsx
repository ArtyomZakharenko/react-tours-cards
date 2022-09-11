import Tour from "./Tour";
import ITour from "./tour.interface";

function Tours({ tours, removeTour }
	               : { tours: ITour[], removeTour: (id: string) => void }) {
	return (
		<section>
			<div className="title">
				<h2>Our Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{tours.map((tour) => {
					return <Tour
						key={tour.id}
						{...tour}
						removeTour={removeTour}
					/>
				})};
			</div>
		</section>
	);
}

export default Tours;
