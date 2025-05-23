import { PrismaClient } from "@prisma/client/extension";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(request : NextRequest){
    const data = await request.json();
    try{
        const user = await prisma.user.create({
            data:{
                email : data.email,
                username : data.username,
                password : data.password,
                passwordHash : data.passwordHash,
                name : data.name,
            }
        })
        return NextResponse.json({
            user
        })
    }catch(e){
        console.log(e);
    }
}
