import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { query as q } from "faunadb";
import { faunadbClient } from "../../../services/faunadb";

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
      console.log(user);

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
      } catch {
        return false;
      }
    },
  },
});
