import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import prisma from "@/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        const existingUser = await prisma.users.findUnique({
          where: { email: user.email! },
          select: {
            id: true,
          },
        });
        if (existingUser) {
          token.id = existingUser.id;
        } else {
          const data = await prisma.users.create({
            data: {
              email: user.email!,
              role: "user",
            },
            select: {
              id: true,
            },
          });
          token.oldUser = "false";
          token.id = data?.id;
        }
      }

      return token;
    },

    async session({ session, token }) {
      // @ts-ignore
      session.user.id = token.id;

      return session;
    },
  },
});
