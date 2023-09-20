
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listing.findMany();
  }),

   get: publicProcedure
    .input(z.object({ listingId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.listing.findUnique({
        where: {
          id: input.listingId,
        },
      });
    }),

  sendMessage: protectedProcedure
    .input(z.object({ message: z.string(), listingId: z.string() }))
    .mutation(async ({ input, ctx }) => {

      const message = await ctx.prisma.message.create({
        data: {
          fromUser: ctx.session?.user.id,
          fromUserName:  ctx.session.user.name ?? "unknown",
          listingId: input.listingId,
          message: input.message,
        },
      });
      return message;
    }),

  getMessages: protectedProcedure
    .query( async ({ ctx }) => {

      const userId = ctx.session.data?.user.id
      const listing = await ctx.prisma.listing.findMany({

          where: {
              userId,
          },
          include: {
              message: true,
          },
      });
        return listing.flatMap((item) => item.message);
    }),

  create: protectedProcedure
    .input(
      z.object(
      { name: z.string(), category: z.string(), price: z.number(), description: z.string()})
    )
    .mutation(async ({ input, ctx }) => {
      const listing = await ctx.prisma.listing.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
      return listing;
    }),

    getRandomProduct: publicProcedure
      .query( async ({ ctx }) => {

          const randomProduct = await ctx.prisma.$queryRawUnsafe(`
                SELECT id, name, price, description FROM Listing
                ORDER BY RAND() 
                LIMIT 3;
          `);
           return randomProduct;
      }),

});
