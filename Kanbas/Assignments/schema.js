import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    points: Number,
    online_entry_type: {
        text: Boolean,
        url: Boolean,
        media: Boolean,
        annotations: Boolean,
        file_upload: Boolean
    },
    submission_type: {
        type: String,
        enum: ["ONLINE", "INPERSON"],
        default: "ONLINE",
      },
    display_grade_as: {
        type: String,
        enum: ["DECIMAL", "PERCENTAGE", "LETTER"],
        default: "DECIMAL",
      },
    available_to: String,
    available_from: String,
    due_date: String,
    group: {
        type: String,
        enum: ["EXAMS", "PROJECT", "ASSIGNMENTS", "QUIZZES"],
        default: "ASSIGNMENTS",
      },
    
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
