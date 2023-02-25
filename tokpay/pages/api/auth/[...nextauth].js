import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // async session(session, user) {
    //   console.log(session.token.email);
    //   session.token.email = user.email;
    //   return session;
    // },
    async signIn(user, account, profile) {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const collection = db.collection("users");
      if (await collection.findOne({ id: user.user.id })) {
        return true;
      } else {
        await collection.updateOne(
          { id: user.user.id },
          {
            $set: {
              id: user.user.id,
              email: user.user.email,
              name: user.user.name,
              image: user.user.image,
            },
          },
          { upsert: true }
        );
        return true;
      }
    },
  },
};

export default NextAuth(authOptions);
