import { Customer } from "../../../models";
import connectDB from "../../../config/connectDB";
import { NextResponse } from "next/server";


export async function GET(request) {
  connectDB();
  const customers = await Customer.find({})

  return NextResponse.json(customers);
}
