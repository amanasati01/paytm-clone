import bcrypt from "bcrypt";
import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import bodyParser from "body-parser";

import { number } from "zod";
import axios from "axios";
const jsonParser = bodyParser.json();
type body =  {
  email : string,
  name : string ,
  number : string,
  password : string
}

export async function POST(req: Request, res: NextResponse) {
  try {
    const { email, name, number, password } : body = await req.json();
    console.log(email, name, number, password );
    if(!email || !name || !number || ! password){
      return NextResponse.json(
        {
          message: "Enter a all credentials",
        },
        { status: 400 }
      );
    }
    const isEmailValid =  email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if(!isEmailValid){
      return NextResponse.json(
        {
          message: "Enter a valid email",
        },
        { status: 400 }
      );
    }
    const isPasswordValid = password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    if(!isPasswordValid){
      return NextResponse.json(
        {
          message: "Enter a valid password",
        },
        { status: 400 }
      );
    }
    const isNumberValid = number.match(/^\d{10}$/)
    if(!isNumberValid){
      return NextResponse.json(
        {
          message: "Enter a valid Number",
        },
        { status: 400 }
      );
    }
    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (isUserExist) {
      console.log("yes exist");
      return NextResponse.json(
        {
          message: "User already exist",
        },
        { status: 400 }
      );
    }
     
    console.log("hashing a password");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("creating a user in db");
    const signupDetail = await prisma.user.create({
      data: {
        name,
        email,
        number ,
        password: hashedPassword,
      },
      select: {
        name: true,
        id: true,
        email: true,
        number: true,
      },
    });
    
    console.log("creating a balance for the user");
    await prisma.balance.create({
      data: {
        userId: signupDetail.id,
        amount: 10000,
        locked: 0,
      },
    });
   
    return NextResponse.json(
      {
        message: "user created with 10000 account balance",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred during signup:", error);
    return NextResponse.json(
      {
        message: "An error occurred during signup",
      },
      { status: 500 }
    );
  }
}
