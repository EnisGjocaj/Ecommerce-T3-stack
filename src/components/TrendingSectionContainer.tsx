import TrendingSection from "./TrendingSection";

export default function TrendingSectionContainer() {
	return (
		<>
			<div className="w-3/5  mt-8 text-black ml-12 border-t border-t-4 border-t-black">
				<h1 className="my-2 text-2xl font-semibold mt-4">Trending Products For You!</h1>
			</div>
			<div className="flex flex-grow flex-row justify-center mb-12">
				<TrendingSection title={"Furniture Village"} src={'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png'}/>
				<TrendingSection title={"Fashion World"} src={'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png'}/>
			</div>
		</>
	)
}