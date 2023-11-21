
import { Customer, News } from "@/models";
import { NextResponse } from "next/server";
import connectDB from "../../lib/connectDB";


connectDB();
export async function GET(request) {
  const customers = await News.find({})

  return NextResponse.json(customers);
}
