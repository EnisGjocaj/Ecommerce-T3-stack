import { signIn, signOut, useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Items } from "Items";
import type { Listing } from "@prisma/client";
import { useRouter } from "next/router";

type ItemsType = {
  name: string;
  category: string;
  description: string;
  price: string;
};

const ListView: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<{ message: string }>();

  // Encapsulate listingId inside the input object
  const listing = api.listings.get.useQuery(
    {
      listingId: router.query.id as string,
    },
    {
      enabled: !!router.query.id,
    }
  );

  const session = useSession();
  const user = session.data?.user;

  const sendMessage = api.listings.sendMessage.useMutation();

  const listingItem = listing.data;

  if (!listingItem) return null;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Specific product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col gap-12">
        <h1 className="mt-12 pl-4 text-4xl">{listingItem.name}</h1>
        <div className="container mx-auto flex flex-col gap-12">
          <p>{listingItem.description}</p>
          <p>$ {listingItem.price}</p>

          {user != null && (
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(() =>
                sendMessage.mutateAsync({
                  message: getValues("message"), // Use getValues to extract the "message" field
                  listingId: listingItem.id,
                }).then(() => reset())
              )}
            >
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message" // Corrected the id from "category" to "message"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  {...register("message", { required: true })} // Corrected the name from "category" to "message"
                />
              </div>

              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Dergo mesazhin
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default ListView;
