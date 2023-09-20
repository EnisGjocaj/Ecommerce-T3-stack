import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
    getCategory: publicProcedure
        .input( z.object({ category: z.string().optional(), }))
        .query( async ({ ctx, input }) => {

              const { category } = input;

              const products = await ctx.prisma.listing.findMany({
                      where: category ? { category } : {},
              });

            return products;
        }),

        searchProducts: publicProcedure
          .input(z.object({ searchName: z.string() }))
          .query(async ({ ctx, input }) => {
            const { searchName } = input;

            const searchProductName = await ctx.prisma.listing.findMany({
              where: {
                name: {
                  contains: searchName,
                },
              },
              select: {
                name: true,
              },
            });

            return searchProductName; 
        }),

        fetchProduct: publicProcedure
          .input(z.object({ term: z.string() }))
          .query(async ({ ctx, input }) => {

              const { term } = input; 

              const product = await ctx.prisma.listing.findMany({
                    where: { name: term },
              });

              return product;
          }),

});
