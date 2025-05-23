import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export function GET(request: NextRequest) {

}
export function POST(request: Request) {
    const data = request.json();
    try{
        const server = prisma.room.create({
            data: {
                name: data.name,
                id: data.id,
                ownerId: data.ownerId,
            }
        })
        return new Response(JSON.stringify(server), { status: 200 });
    }
}
