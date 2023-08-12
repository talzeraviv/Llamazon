import NextAuth from "next-auth";
import NextAuthOptions from "@/libs/NextAuthOptions";

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
