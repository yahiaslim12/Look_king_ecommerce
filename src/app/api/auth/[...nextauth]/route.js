import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'email*', type: 'email' },
        password: { label: 'password*', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log("Credentials received:", credentials);
        try {
          const res = await fetch('http://localhost:8000/getuser/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email }),
          });

          if (!res.ok) {
            console.error('Failed to fetch user:', res.statusText);
            throw new Error('Network response was not ok');
          }

          const user = await res.json();
          console.log("User found:", user);
          const validPassword = await compare(credentials.password,user.password)

          if(!validPassword){
              throw new Error("User email or password incorrect")
          }

          return user
        } catch (error) {
           console.log(error);
           return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.email;
        token.email = user.email;
        token.name = user.name;
      }
      console.log("JWT token:", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as POST, handler as GET };
