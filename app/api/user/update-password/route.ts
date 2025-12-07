
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import { error } from "console";
import { prisma } from "@/lib/prisma";

export async function PUT(req : Request){

const {userId ,newPassword} = await req.json();
const user = await prisma.user.findUnique({ where: { id: userId } });
if(!user) return NextResponse.json({error : "user not fount"});



const hasherdPassword = await bcrypt.hash(newPassword,10);
await prisma.user.update({
    where : {id : userId},
    data : {password : hasherdPassword},
});
return NextResponse.json({success : true});
}