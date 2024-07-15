import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { GET_USER } from './login';

const handler = NextAuth({
  session : {
    strategy : 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const data = {email : credentials.email ,password: credentials.password}
        var user = null
        const res = await fetch('http://localhost:8000/getuser',{
          method : 'post',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify({email : data.email})
        })
        console.log(res);
        if(res){
            user = res[0]
        }else{
            throw 'login failed'
        }
        return user
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to the token if the user exists
      if (user) {
        token.id = user.email;
        token.email = user.email;
        token.name = user.firstname+' '+user.lastname;  // Include other fields as needed
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      // Add token data to the session
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
