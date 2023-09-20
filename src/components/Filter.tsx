import { useState } from 'react';

export function Filter({ selectedCategory, onCategoryChange }) {

	const [isDropdownActive, setIsDropdownActive] = useState(false);

	const toggleDropdown = () => {
	    setIsDropdownActive(!isDropdownActive);

	};

	const handleCategoryChange = (categoryName) => {
	    onCategoryChange(categoryName);
	};  

	return (
		<>
			<div className="flex items-center justify-center p-4 relative">
			  <button onClick={toggleDropdown} id="dropdownDefault" data-dropdown-toggle="dropdown"
			    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			    type="button">
			    Filter by category
			    <svg  className={`w-4 h-4 ml-2 transform ${isDropdownActive ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
			      xmlns="http://www.w3.org/2000/svg">
			      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
			    </svg>
			  </button>

			  <div id="dropdown" className={`active-dropdown ${isDropdownActive ? 'block' : 'hidden'} w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}>
			    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
			      Category
			    </h6>
			    <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
			      <li className="flex items-center">
			        <input onChange={() => handleCategoryChange("Shtëpi")} defaultChecked={false} id="apple" type="radio" value=""
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			          Shtepi
			        </label>
			      </li>

			      <li className="flex items-center">
			        <input id="fitbit" onChange={() => handleCategoryChange("Veshje")} defaultChecked={false} type="radio" value=""
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			          Veshje
			        </label>
			      </li>

			      <li className="flex items-center">
			        <input onChange={() => handleCategoryChange('Teknologji')} id="dell" type="radio"  defaultChecked={false} value=""
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			        	Teknologji
			        </label>
			      </li>

			      <li className="flex items-center">
			        <input onChange={() => handleCategoryChange('Kozmetike')} id="asus" type="radio" value=""  defaultChecked={false}
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			           Kozmetike
			        </label>
			      </li>

			      <li className="flex items-center">
			        <input onChange={() => handleCategoryChange('Vegla pune')} id="logitech" type="radio" value=""  defaultChecked={false}
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="logitech" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			          Vegla pune
			        </label>
			      </li>

			      <li className="flex items-center">
			        <input onChange={() => handleCategoryChange('Shendet')} id="msi" type="radio" value=""  defaultChecked={false}
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="msi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			          Shendet
			        </label>
			      </li>

			      <li className="flex items-center">
			        <input onChange={() => handleCategoryChange('Per femije')} id="bosch" type="radio" value=""  defaultChecked={false}
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="bosch" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			          Për femije
			        </label>
			      </li>

			      <li className="flex items-center">
			        <input onChange={() => handleCategoryChange('Librari')} id="sony" type="radio" value=""  defaultChecked={false}
			          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

			        <label htmlFor="sony" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
			          	Librari
			        </label>
			      </li>
			    </ul>
			  </div>
			</div>
		</>
	);
}