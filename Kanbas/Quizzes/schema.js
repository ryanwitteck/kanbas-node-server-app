import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    quiz_type: {
      type: String,
      enum: ["GRADED", "PRACTICE", "SURVEY", "UNGRADED"],
      default: "GRADED",
    },
    points: Number,
    group: {
      type: String,
      enum: ["EXAMS", "PROJECT", "ASSIGNMENTS", "QUIZZES"],
      default: "ASSIGNMENTS",
    },
    most_recent_score: Number,
    shuffle: Boolean,
    time_limit: Number,
    multiple_attemps: Boolean,
    attempt_count: Number,
    show_correct_answers: Boolean,
    access_code: Boolean,
    one_question_at_a_time: Boolean,
    webcam_required: Boolean,
    lock_questions_after_answering: Boolean,
    available_start: String,
    available_end: String,
    due_date: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);
export default schema;
