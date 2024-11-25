import mongoose from "mongoose";
const scoreSchema = new mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    score: {type: Number, default: 0},
    answers: [{
        questionId: { type: String },
        answer: String,
      }],

  },
  { collection: "scores" }
);
export default scoreSchema;
