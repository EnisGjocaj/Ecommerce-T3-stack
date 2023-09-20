import Slider from './Slider';

export default function CategorySlider() {
	return(
		<>
			<div className="flex mx-8 bg-white">
				<h1 className="text-black my-2 mx-4 text-center font-semibold text-2xl">Shop Our Top Categories</h1>
			</div>
			<div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<Slider text="Home" imageUrl="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png" />
				<Slider text="Tech" imageUrl="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png" />
				<Slider text="Books" imageUrl="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png" />
			</div>
		</>
	);
}