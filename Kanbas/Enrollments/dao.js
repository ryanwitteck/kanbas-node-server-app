import Database from "../Database/index.js";
export function findAllEnrollments(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}
export function createEnrollment(enrollment, userId, courseId) {
  const newEnrollment = {
    ...enrollment,
    _id: Date.now().toString(),
    user: userId,
    course: courseId
  };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}
export function deleteEnrollment(enrollmentId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => enrollment._id !== enrollmentId
  );
}
