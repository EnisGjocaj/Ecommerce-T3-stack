export default function SaleCard() {
	return (
		<div className="text-white max-w-sm p-12 bg-[#003d29] outline-none rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-8 text-4xl font-bold tracking-tight dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-8 font-normal text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            {/*<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>*/}
            <button type="button" class="border border-1 border-white border-solid text-white bg-transparent hover:bg-gray-900 hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition duration-300 ease-in-out">Learn more</button>
        </div> 
	);
}
