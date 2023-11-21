import mongoose from "mongoose"

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // slug: {
  //   type: String,
  //   index: {
  //     unique: true,
  //   },
  //   required: true
  // },
  content: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["publish", "draft", "pending"],
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  updaterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
  {
    timestamps: true,
  }
)

const News = mongoose.models.News || mongoose.model("News", NewsSchema)

export default News