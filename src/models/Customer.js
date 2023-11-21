import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    serviceOrder: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    travelTime: {
      type: Number,
      default: 0,
    },
    province: {
      type: String,
      required: true,
    },
    in: {
      type: String,
      required: true,
    },

    out: {
      type: String,
    },
    taxRate: {
      type: Number,
      default: 0,
    },
    hours: {
      type: Number,
      default: 0,
    },
    expense: {
      type: Number,
      default: 0,
    },
    expenseDescription: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    overTime: {
      type: Number,
      default: 0,
    },
    travelPrice: {
      type: Number,
      default: 0,
    },
    mileage: {
      type: Number,
      default: 0,
    },
    labour: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;
