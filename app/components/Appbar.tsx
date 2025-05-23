"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import axios from "axios";

export function Appbar() {
    const session = useSession();
    const router = useRouter();
    useEffect(()=>{
        const sign= async ()=>{
            try{
                const res = await axios.post("/api/verification/signin",{
                email : session.data?.user?.email});
                console.log(res.data);
                if(res.data.user==false){
                    router.push("/home/chat");
                }
                else{
                }
            }
            catch(e){
                console.log(e);
            }
        }
        sign();
        console.log(session.data?.user?.email);
    },[session])

  return (

    <div className="">
      <div className="">
        {!session.data?.user && <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-500 transition duration-200"  onClick={()=>{signIn("google")}}>
                        Login
                    </button>}
        {session.data?.user && <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{signOut()}}>Logout</button>}
      </div>
    </div>
  );
}
