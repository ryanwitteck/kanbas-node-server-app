import model from "./model.js";
import mongoose from "mongoose";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
  delete assignment._id
  return model.create(assignment);
}

export function deleteAssignment(assignmentId) {
  const objectId = new mongoose.Types.ObjectId(assignmentId);
  return model.deleteOne({ _id: objectId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const objectId = new mongoose.Types.ObjectId(assignmentId);
  return model.updateOne({ _id: objectId }, assignmentUpdates);
}