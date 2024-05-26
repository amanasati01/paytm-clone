import prisma from "@repo/db/client"
import { Card } from "@repo/ui/card"
import { getServerSession } from "next-auth"
import { authOptions } from "../app/lib/auth"
import { log, time } from "console"
import { preloadStyle } from "next/dist/server/app-render/entry-base"

export const P2pTransaction = async () => {
    const session =await getServerSession(authOptions)
    const fromId = Number( session.user.id)
    const userNumber = await prisma.user.findUnique({
        where :{
            id : fromId
        },
        select :{
           number : true
        }
    })
    async function toNumber (id : number){
          const number =  await prisma.user.findUnique({
            where : {
                id 
            },
            select :{
                number : true
            }
          })
        
          return number
          
    }
    const DecTransection = await prisma.p2pTransfer.findMany({
       where :{
         fromUserId : fromId
       }
    })
    const incTransaction = await prisma.p2pTransfer.findMany({
        where :{
            toUserId : fromId
        }
    })
    const bothTransaction = [...incTransaction,...DecTransection]
    bothTransaction.sort((a, b) => {
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
    
    if (!bothTransaction.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2 flex justify-center flex-col">
           
        {bothTransaction.map(async (t) => (
        <div className="flex justify-between" key={t.id}>
        <div>
            <div className="text-sm">
               {(t.toUserId == fromId) ? <> Received INR</> : <> Send INR</>}
            </div>
            <div className="text-slate-600 text-xs">
                {(t.fromUserId === fromId) ? <>Number: {(await toNumber(t.toUserId))?.number}</> : <>Number: {(await toNumber(t.fromUserId))?.number}</>}
            </div>
            <div className="text-slate-600 text-xs">
                {new Date(t.timestamp).toDateString()}
            </div>
        </div>
        <div className="flex flex-col justify-center">
            {(t.fromUserId === fromId) ? (
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    Rs {t.amount}
                </div>
            ) : (
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                    Rs {t.amount}
                </div>
            )}
        </div>
    </div>
))}

        
        </div>
    </Card>
}

