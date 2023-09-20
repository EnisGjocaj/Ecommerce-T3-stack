import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import TrendingSection from "~/components/TrendingSection";
import TrendingSectionContainer from "~/components/TrendingSectionContainer";

export default function MainContainer() {

  return (
       <>
          <div className="bg-white flex flex-col gap-12">
              <TrendingSectionContainer />
          </div>
        </>
  );
}