import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"

import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"

import prisma from "./connect"
import { getServerSession } from "next-auth"
//
export const authOption = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
}

export const getAuthSession = () => getServerSession(authOption)
