import { createTRPCRouter } from "~/server/api/trpc";
import { listingsRouter } from "~/server/api/routers/listings";
import { categoryRouter } from "~/server/api/routers/category";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    listings: listingsRouter,
    category: categoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
