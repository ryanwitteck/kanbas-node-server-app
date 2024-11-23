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
  const objectId = new mongoose.Types.ObjectId(quizId);
  return model.deleteOne({ _id: objectId });
}

export function updateQuiz(quizId, quizUpdates) {
  const objectId = new mongoose.Types.ObjectId(quizId);
  return model.updateOne({ _id: objectId }, quizUpdates);
}