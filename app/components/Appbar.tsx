"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { use } from "react";

export function Appbar() {
  const session = useSession();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex space-x-4">
        {!session.data?.user && <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{signIn("google",{callbackUrl:"/chat"})}}>SignIN</button>}
        {session.data?.user && <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{signOut()}}>Logout</button>}
      </div>
    </div>
  );
}
