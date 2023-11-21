import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import speakeasy from "speakeasy";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      index: true,
      match: [
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      enum: ["superAdmin", "admin", "technician"],
      default: "technician",
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    update_secret: {
      type: Object,
      select: false,
      default: speakeasy.generateSecret({ length: 32 }),
    },
    image: {
      type: Object,
      default: null,
    },
    status: {
      type: String,
      enum: ["completed", "inProgress", "inComplete"],
    },
    auth_secret: {
      type: Object,
      select: false,
      default: speakeasy.generateSecret({ length: 32 }),
    },
    resetPasswordToken: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match users entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  if (update.password) {
    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(update.password, salt);
  }
  next();
});

// Reverse populate with virtuals
UserSchema.virtual("customers", {
  ref: "Customer",
  localField: "_id",
  foreignField: "technician",
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
