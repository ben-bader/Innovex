
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function PUT(req : Request){
    const { userId,name,email} = await req.json();

    const updated = await prisma.user.update({
        where : {id : userId},
        data : {name,email},
    }
    );
    return NextResponse.json({success : true,user:updated});
}