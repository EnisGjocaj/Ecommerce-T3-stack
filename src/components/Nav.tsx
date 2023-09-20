import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export function Nav() {

	const session = useSession();
	const user = session.data?.user;

	return (
		<nav className="border-gray-200 bg-white dark:bg-gray-900">
	      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
	        <Link href="/" className="flex items-center">
	          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
	             ECOMMERCER
	          </span>
	        </Link>
	        <button
	          data-collapse-toggle="navbar-default"
	          type="button"
	          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
	          aria-controls="navbar-default"
	          aria-expanded="false"
	        >
	          <span className="sr-only">Open main menu</span>
	          <svg
	            className="h-6 w-6"
	            aria-hidden="true"
	            fill="currentColor"
	            viewBox="0 0 20 20"
	            xmlns="http://www.w3.org/2000/svg"
	          >
	            <path
	              fillRule="evenodd"
	              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
	              clipRule="evenodd"
	            ></path>
	          </svg>
	        </button>
	        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
	          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
	            <li>
	              <Link
	                href="/Main"
	                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
	                aria-current="page"
	              >
	                Home
	              </Link>
	            </li>
	              <>
	                <li>
	                  <Link
	                    href="/"
	                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
	                    aria-current="page"
	                  >
	                    About
	                  </Link>
	                </li>
	                <li>
	                  <Link
	                    href="/Items"
	                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
	                    aria-current="page"
	                  >
	                    Items
	                  </Link>
	                </li>
	                { user != null && user.name == "enis" ? (
	                	<li>
		                  <Link
		                    href="/offers"
		                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
		                    aria-current="page"
		                  >
		                    Offers
		                  </Link>
		                </li>
	            	) : 
	            		null
	            	}
	                <li className="text-gray-500">
	                	|
	                </li>
	                { user != null && (
	                	<li>
		                  <Link
		                    href={`/profiles/${user.id}`}
		                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
		                    aria-current="page"
		                  >
		                    Profile
		                  </Link>
		                </li>
		            )}
	                { user == null ? ( 
	                	<li>
		                  <button
		                  	onClick={() => void signIn()}
		                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
		                    aria-current="page"
		                  >
		                    Log In
		                  </button>
		              </li> 
		             ): (
			            <li>
		              		<button
			                    onClick={() => void signOut()}
			                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
			                    aria-current="page"
			                  >
			                    Sign Out
			                </button>
			            </li>
			         )}
	              </>
	          </ul>
	        </div>
	      </div>
	    </nav>
	);
}