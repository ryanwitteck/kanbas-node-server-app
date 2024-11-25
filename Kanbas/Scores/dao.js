import model from "./model.js";
import mongoose from "mongoose";

export function findScoresForUser(userId, quizId) {
  return model.find({ user: new mongoose.Types.ObjectId(userId), quiz: new mongoose.Types.ObjectId(quizId) });
}
export function createScore(score) {
  delete score._id
  return model.create(score);
}

export function updateScore(scoreId, scoreUpdate) {
  const objectId = new mongoose.Types.ObjectId(scoreId);
  return model.updateOne({ _id: objectId }, scoreUpdate);
}