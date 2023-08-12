// import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

function NextAuthOptions() {
  const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      // CREDENTIALS FOR VALIDATING USERS: TBD
      //
      // CredentialsProvider({
      //   name: "Credentials",
      //   credentials: {
      //     username: {
      //       label: "Username:",
      //       type: "text",
      //       placeholder: "Your username"
      //     },
      //   },
      //   async authorize(credentials) {

      //   }
      // }),
      // ...add more providers here
    ],
  };
  return authOptions;
}

export default NextAuthOptions();
