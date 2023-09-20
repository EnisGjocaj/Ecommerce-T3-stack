export default function SearchItem({ name, onClick }) {
	return (
		<li>
	        <button
	        	onClick={onClick}
	        	type="button" 
	        	className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
	          		{ name.name } 
	        </button>
        </li>
	);
}