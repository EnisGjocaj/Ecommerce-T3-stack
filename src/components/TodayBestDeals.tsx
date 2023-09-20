import SuggestedProduct from './SuggestedProduct';
import CustomCursor from './CustomCursor';
import { api } from "~/utils/api";
import React, { useState } from 'react';

export default function TodayBestDeals() {

	const [hoveringDiv, setHoveringDiv] = useState(false);

	const handleDivMouseEnter = () => {
	    setHoveringDiv(true);
	};

	const handleDivMouseLeave = () => {
	    setHoveringDiv(false);
	};


	const randomProduct = api.listings.getRandomProduct.useQuery();

		if (randomProduct.data) {

		  	const firstRandomProductName = randomProduct.data[0]?.name;
		}

		console.log(randomProduct.data)

	return (
		<div>
			<div className="flex mx-8 my-8">
				<h1 className="text-black my-2 mx-4 text-center font-semibold text-2xl">Today's Best Deals</h1>
			</div>
			    <div className= "mx-8 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
			        {randomProduct.data && Array.isArray(randomProduct.data) ? (
			            randomProduct.data.map((product, index) => (
			               <SuggestedProduct
						          key={index}
						          name={product.name}
						          price={product.price}
						          description={product.description}
						          showCursor={hoveringDiv}
						          handleDivMouseEnter={handleDivMouseEnter}
						          handleDivMouseLeave={handleDivMouseLeave}
					        />
			            ))
			        ) : (
			            <p>Loading or no data available...</p> //make this loading or error image appear
			        )}
			    </div>
			    <CustomCursor showCursor={hoveringDiv} />
		</div>
	);
}
