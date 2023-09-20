import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NavBar } from "~/components/NavBar";
import { Nav } from "~/components/Nav";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  //text-white bg-gray-700
  const router = useRouter();

  const excludeBgClass = router.pathname === './Main.tsx';

  return (
    <SessionProvider session={session}>
      <Nav />
      <div className={excludeBgClass ? 'bg-white' : ''}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
