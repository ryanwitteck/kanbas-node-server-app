import model from "./model.js";
import mongoose from "mongoose";

export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: new mongoose.Types.ObjectId(quizId) });
}
export function findAllQuestions() {
  return model.find();
}
export function createQuestion(question) {
  delete question._id;
  return model.create(question);
}

export function deleteQuestion(questionId) {
  const objectId = new mongoose.Types.ObjectId(questionId);
  return model.deleteOne({ _id: objectId });
}

export function updateQuestion(questionId, questionUpdates) {
  const objectId = new mongoose.Types.ObjectId(questionId);
  return model.updateOne({ _id: objectId }, questionUpdates);
}
