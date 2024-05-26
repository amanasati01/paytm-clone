import { Button } from "./button";
import { useRouter } from "next/navigation";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    const router = useRouter();
    return <div className="flex justify-between border-b px-4 border-slate-300">
        <button className="text-lg flex flex-col justify-center" onClick={()=>{
            router.push('/dashboard')
        }}>
            PayTM
        </button>
        <div className="flex  justify-center pt-2">
        {user ? (
            null
        ) : (
            <div className="flex flex-col justify-center pt-2">
                <Button onClick={()=>{
                    router.push("/signup")
                }} >
                Signup</Button>
            </div>
        )}
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
        </div>
    </div>
}
