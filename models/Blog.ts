import mongoose from "mongoose";

interface IBlog extends mongoose.Document {
  title: string;
  content: string;
  datePosted: Date;
  author: mongoose.Schema.Types.ObjectId;
  interactions: IPostInteractions[];
  comments: IComments[];
  category: string;
}

interface IPostInteractions extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  postId: mongoose.Schema.Types.ObjectId;
  like: boolean;
  dislike: boolean;
}

interface IComments extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  comment: string;
  commentDate: Date;
  commentInteraction: ICommentInteraction[];
}

interface ICommentInteraction extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  postId: mongoose.Schema.Types.ObjectId;
  commentLike: boolean;
  commentDislike: boolean;
}

const commentInteractions = new mongoose.Schema<ICommentInteraction>({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  postId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Blog" },
  commentLike: { type: Boolean, required: true, default: false },
  commentDislike: { type: Boolean, required: true, default: false },
});

const comments = new mongoose.Schema<IComments>({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  comment: { type: String, required: true, default: "" },
  commentDate: { type: Date, required: true, default: Date.now() },
  commentInteraction: {
    type: [commentInteractions],
    required: false,
    default: [],
  },
});

const postInteractions = new mongoose.Schema<IPostInteractions>({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  postId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Blog" },
  like: { type: Boolean, required: true, default: false },
  dislike: { type: Boolean, required: true, default: false },
});

const BlogSchema = new mongoose.Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true, minLength: 5 },
  datePosted: { type: Date, required: true, default: Date.now() },
  author: { type: mongoose.Schema.Types.ObjectId, required: true },
  category: { type: String, required: true, default: "general" },
  interactions: { type: [postInteractions], required: false, default: [] },
  comments: { type: [comments], required: false, default: [] },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
