import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { redirect, useRouter } from "next/navigation";

export default  async function isLogin(){
    // const router = useRouter()
  const session  =await getServerSession(authOptions);
  if(!session?.user){
     redirect('/signup')
  }
  
}