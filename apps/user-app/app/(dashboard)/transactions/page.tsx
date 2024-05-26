import { getServerSession } from "next-auth";
import { BalanceCard } from "../../../components/BalanceCard";
import { SendCard } from "../../../components/SendCard";
import { P2pTransaction } from "../../../components/p2pTransaction";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import isLogin from "../../lib/actions/isLogin";
async function getOnRampTransactions() {
   await isLogin()
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}
export default async function(){
    const transactions = await getOnRampTransactions();
    // const balance = await getBalace();
    // const transactions =await getTransactions();
    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
           P to P transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 w-full">
            <div>
            <OnRampTransactions transactions={transactions} />
                {/* <SendCard/> */}
            </div>
            <div>
                {/* <BalanceCard amount={balance.amount*100} locked={balance.locked*100} /> */}
                <div className="pt-4">
                    <P2pTransaction 
                    // transactions={transactions}
                     />
                </div>
            </div>
        </div>
    </div>
}