import model from "./model.js";
import mongoose from "mongoose";

export function findQuizzesForCourse(courseId) {
  return model.find({ course: new mongoose.Types.ObjectId(courseId) });
}
export function findAllQuizzes() {
    return model.find();
  }
export function createQuiz(quiz) {
  delete quiz._id
  return model.create(quiz);
}

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, quizUpdates);
}