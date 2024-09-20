import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Add a secret to encrypt the JWT and sessions
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true, // Use JSON Web Tokens for session handling
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access token and user information
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
