import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    points: Number,
    group: {
        type: String,
        enum: ["MULTIPLE", "TF", "FILL_IN"],
        default: "TF",
      },
    multiple_answers_array: [String],
    multiple_answers_answer: String,

    tf_answer: Boolean,
    fill_in_answers_array: [String],
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);
export default schema;
