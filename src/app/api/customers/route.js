
import { Customer, Report, User } from "@/models";
import { NextResponse } from "next/server";
import connectDB from "../../lib/connectDB";


connectDB();
export async function GET(request) {
  const customers = await Report.find({})

  return NextResponse.json(customers);
}
