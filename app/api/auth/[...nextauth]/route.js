import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { sha256 } from "js-sha256";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      type: "credentials",
      id: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const body = {
          username: credentials?.username,
          password: credentials?.password,
        };

        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify(body),
        });

        const user = await res.json();

        if (Object.keys(user).length > 0) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            name: user.username,
            email: user.correo_inst,
            image: JSON.stringify(user),
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
