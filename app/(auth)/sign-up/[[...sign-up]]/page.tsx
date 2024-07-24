import { SignUp } from "@clerk/nextjs";
export default function Page(){
    return(
        <div className="h-screen flex justify-center items-center py-24">
            <SignUp />
        </div>
    )
}