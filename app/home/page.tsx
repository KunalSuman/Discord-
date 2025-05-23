"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function home() {
    const router = useRouter();
    const [server ,setserver] = useState({});

    useEffect(() => {

    }, []);
    return(
        <div>
            {Object.keys(server).map((data)=>{
                const serverData = server[data];
                return(
                    <div onClick={()=>{
                        router.push(`/chat/${serverData.id}`);
                    }}>
                        <h1>{serverdata.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}
