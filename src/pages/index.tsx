import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { Filter } from "~/components/Filter";
import  ProductImage from "~/components/ProductImage";
import  ImageCarousel  from "~/components/ImageCarousel";
import  Search from "~/components/Search";
import Link from "next/link";
import { api } from "~/utils/api";
import { Items } from "Items";
import type { Listing } from "@prisma/client";
import { useEffect } from "react";
import { useState } from 'react';


function Card({ listing, selectedProduct }) {

         const isSelected = selectedProduct?.id === listing.id;
         const product = isSelected ? selectedProduct : listing;
         const price = `${product.price} €`;

    return ( 
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <ProductImage src="/" />
          </a>
          <div className="px-5 pb-5">
              <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                  <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                  <span className="bg-gray-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.category}</span>
              </div>
              <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                  <Link  href={`/listings/${listing.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Blej</Link>
              </div>
          </div>
      </div>
    );
}

export default function Home() {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const handleCategoryChange = ( categoryName ) => {
      setSelectedCategory((prevSelectedCategory) => {

        const isSelected = prevSelectedCategory.includes(categoryName);

        if (isSelected) {
              console.log("Removing category:", categoryName);
              return prevSelectedCategory.filter((category) => category !== categoryName);
          } else {
              console.log("Adding category:", categoryName)
              
              return [categoryName];
          }


      });
    };

    // const listings = api.listings.list.useQuery();

    const inputObject = { category: selectedCategory };

    const { data: categoryListing, error } = api.category.getCategory.useQuery({
      category: selectedCategory.join(','),
    });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col gap-12">
        <div className="flex items-center justify-between">
          <h1 className="mt-12 pl-4 text-4xl">Items for Sale</h1>
          <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
          <Search setSelectedProduct={setSelectedProduct} />
        </div>
        <div className="container grid grid-cols-3 items-center justify-center gap-4">
              {selectedProduct ? (
                <Card listing={selectedProduct} selectedProduct={selectedProduct !== null ? selectedProduct : undefined} />
              ) : (
                categoryListing?.map((product) => (
                  <Card key={product.id} listing={product} selectedProduct={selectedProduct !== null ? selectedProduct : undefined} />
                ))
              )}
        </div>
      </main>
    </>
  );
}
