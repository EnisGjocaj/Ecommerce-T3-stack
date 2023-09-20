import Image from 'next/image';
import { api } from "~/utils/api";
import type { Listing } from "@prisma/client";

export default function SuggestedProduct({ 
	  name,
	  price,
	  description,
	  showCursor,
	  handleDivMouseEnter,
	  handleDivMouseLeave 
	}){

	return (
		
		<div 
			className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${showCursor ? 'hover-div' : ''}`}
		    onMouseEnter={handleDivMouseEnter}
      		onMouseLeave={handleDivMouseLeave} 
      	>
		    <a href="#">
		        <img className="rounded-t-lg transition-transform transform-gpu hover:scale-110" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png" alt="" />
		    </a>
		    <div className="p-5 bg-gray-100">
		        <a href="#">
		            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
		        </a>
		        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
		        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
		            {price}
		             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
		                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
		            </svg>
		        </a>
		    </div>
		</div>

	);
}