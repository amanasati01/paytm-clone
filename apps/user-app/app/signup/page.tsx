"use client"
import { useEffect, useState } from "react";
import InputBox from "../../components/InputBox";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";


export default  function Signup() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   const session = useSession();
   if(session.data?.user){
    console.log("i am on singup page");
    
    router.push('/dashboard')
   } 
    const signupButton = async () => {
        try {
            const response = await axios.post("http://localhost:3001/api/signup", {
                name,
                email,
                password,
                number,
            });
            console.log("signupApi " + response);
           const res = await signIn("Credentials",{
            number,
            password,
            redirect : false
           })
           console.log(res);
           router.push('/dashboard')
        } catch (error:any) {
            console.error("Error occurred during signup:", error);
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || "An error occurred during signup");
            } else if (error.request) {
                toast.error("No response received from the server");
            } else {
                toast.error("An error occurred during signup");
            }
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div>
                <div className="flex justify-center items-center w-full mb-4 text-2xl font-semibold"><h1>Signup</h1></div>
                <InputBox name="Name" placeholder="Write your name" type="text" state={setName} />
                <InputBox name="Email" placeholder="Write your email" type="text" state={setEmail} />
                <InputBox name="Number" placeholder="Write your number" type="text" state={setNumber} />
                <InputBox name="Password" placeholder="Write your password" type="password" state={setPassword} />
                {error && <div className="text-red-500">{error}</div>}
                <div className="flex justify-center">
                    <button type="button" className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={signupButton}
                    >Signup</button>
                </div>
            </div>
        </div>
    );
}
