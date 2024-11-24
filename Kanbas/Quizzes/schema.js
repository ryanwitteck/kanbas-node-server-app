import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    published: {
      type: Boolean,
      default: false,
    },
    quiz_type: {
      type: String,
      enum: ["GRADED", "PRACTICE", "SURVEY", "UNGRADED"],
      default: "GRADED",
    },
    points: Number,
    group: {
      type: String,
      enum: ["EXAMS", "PROJECT", "ASSIGNMENTS", "QUIZZES"],
      default: "QUIZZES",
    },
    most_recent_score: Number,
    shuffle: {
      type: Boolean,
      default: true,
    },
    time_limit:  {
      type: Number,
      default: 20,
    },
    multiple_attempts: {
      type: Boolean,
      default: false,
    },
    attempt_count: {
      type: Number,
      default: 1,
    },
    show_correct_answers:  {
      type: Boolean,
      default: false,
    },
    correct_answer_release_date: String,
    access_code: {
      type: String,
      default: "",
    },
    one_question_at_a_time: {
      type: Boolean,
      default: true,
    },
    webcam_required: {
      type: Boolean,
      default: false,
    },
    lock_questions_after_answering: {
      type: Boolean,
      default: false,
    },
    number_of_questions: Number,
    available_start: String,
    available_end: String,
    due_date: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);
export default schema;
