import { getServerSession } from "next-auth"
import { SendCard } from "../../../components/SendCard"
import { authOptions } from "../../lib/auth"
import prisma from "@repo/db/client";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { P2pTransaction } from "../../../components/p2pTransaction";
import isLogi from "../../lib/actions/isLogin";
import isLogin from "../../lib/actions/isLogin";
import { toast } from "react-toastify";

async  function getBalace(){
    try {
        const session = await getServerSession(authOptions);
        const userId = Number(session?.user?.id)
        console.log(userId);
        
        const balance = await prisma.balance.findFirst({
            where: {
                userId: userId
            }
        });
        return {
            amount: balance?.amount || 0,
            locked: balance?.locked || 0
        }
        return {
            amount : balance?.amount || 0,
            locked : balance?.locked || 0,
        }
        
    } catch (error) {
        toast(`${error}`)
    }
   
 }
//  async function  getTransactions() {
//     const session = await getServerSession(authOptions);
//     const userId = Number(session?.user?.id);
//     const txns = await prisma.p2pTransfer.findMany({
//         where :{
//             fromUserId : userId
//         }
//     })
   
//     return txns.map(t => ({
//         time: t.timestamp,
//         amount: t.amount,
//     }))
//  }
export default async function(){
    await isLogin()
    const balance : {
        amount : number,
        locked : number
    } | undefined = await getBalace() ;
    console.log(balance);
    // const transactions =await getTransactions();
    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
           P to P transfer
        </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 w-full">
            <div>
                <SendCard/>
            </div>
            <div>
            {balance && (
          <BalanceCard amount={balance.amount * 100} locked={balance.locked * 100} />
)}
                <div className="pt-4">
                    <P2pTransaction 
                    // transactions={transactions}
                     />
                </div>
            </div>
        </div>
    </div>
}
