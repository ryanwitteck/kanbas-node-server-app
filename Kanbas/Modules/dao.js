import model from "./model.js";
import mongoose from "mongoose";

export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createModule(module) {
  delete module._id
  return model.create(module);
}
export function deleteModule(moduleId) {
  const objectId = new mongoose.Types.ObjectId(moduleId);
  return model.deleteOne({ _id: objectId });
}
export function updateModule(moduleId, moduleUpdates) {
  const objectId = new mongoose.Types.ObjectId(moduleId);
  return model.updateOne({ _id: objectId }, moduleUpdates);
}
