import Image from 'next/image';

export default function DiscountCard() {
  return (
    <div className="mb-4">
      <div className="flex flex-row flex-grow p-10 bg-pink-200">
        <div className="flex-1"> 
          <div>
            <h1 className="text-4xl text-gray-800 font-semibold">Get 5% Cash Back</h1>
            <h4 className="text-lg text-gray-800">on Shopcart.com</h4>
            <form>
              <button
                type="button"
                className="mt-2 border border-1 border-white border-solid text-white bg-[#003d29] hover:bg-gray-900 hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition duration-300 ease-in-out"
              >
                Learn more
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-end justify-end"> 
          <Image
            height={180}
            width={190}
            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"
            alt="Card image"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
