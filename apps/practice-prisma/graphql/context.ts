// /graphql/context.ts
import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';
import { Claims, getSession } from '@auth0/nextjs-auth0';

export type Context = {
  prisma: PrismaClient;
  user?: Claims;
  accessToken?: string;
};
export async function createContext({ req, res }): Promise<Context> {
  const session = getSession(req, res);

  if (!session) return { prisma };

  const { user, accessToken } = session;

  return {
    prisma,
    user,
    accessToken
  };
}
