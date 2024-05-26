import NextAuth from "next-auth"
import { authOptions } from "../../../lib/auth"
import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from 'next-auth/react';
const handler = NextAuth(authOptions)
// export default async function signin(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     const { number, password } = req.body;

//     if (!number || !password) {
//       return res.status(400).json({ message: 'number and password are required' });
//     }

//     await signIn('credentials', {
//       redirect: false,
//       number,
//       password,
//     });

//     return res.status(200).json({ message: 'Signed in successfully' });
//   } catch (error) {
//     console.error('Error occurred during signin:', error);
//     return res.status(500).json({ message: 'An error occurred during signin' });
//   }
// }
export { handler as GET, handler as POST }