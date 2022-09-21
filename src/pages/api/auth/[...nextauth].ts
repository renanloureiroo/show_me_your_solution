import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";


import { query as q } from "faunadb";
import { faunadbClient } from "../../../services/faunadb";
import { FaunaAdapter } from "@next-auth/fauna-adapter"
export default NextAuth({
  theme: {
    logo: "/logo.svg",
    brandColor: "#0f766e",
  },
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET_KEY || "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const { email } = user;

      try {
        await faunadbClient.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email!))
              )
            ),
              
            q.Create(q.Collection("users"), {
              data: {
                email,
              },
            }),
          
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email!)))
          )
        );
        return true;
      } catch(e)  {
        console.log(e)
        return false;
      }
    },
  },
  session: {
    strategy: "jwt", // jwt0
    maxAge: 3 * 24 * 60 * 60, // 3 days session
    updateAge: 24 * 60 * 60, // 24h validation session
  },
  adapter: FaunaAdapter(faunadbClient),
  secret: process.env.NEXTAUTH_SECRET,
});
