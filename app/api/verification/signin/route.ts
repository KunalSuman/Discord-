import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const prisma = await new PrismaClient();
export async function GET(request : NextRequest){
    const res = request.json();
    console.log(res);
    try{
        const user = prisma.user.findUnique({
            where:{
                email :res.email,
            }
        })
        if (user){
            return NextResponse.json({
                user : true ,
            })
            console.log("hello")
        }
        else {
            return NextResponse.json({
                user : false ,
            })
        }
    } catch(e){
        console.log("error")
    }

}
