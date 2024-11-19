import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findAllEnrollments(userId);
    res.send(enrollments);
  });
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const newEnrollment = dao.createEnrollment({}, userId, courseId);
    res.status(201).send(newEnrollment);
  });
  
  app.delete("/api/enrollments/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    dao.deleteEnrollment(enrollmentId);
    res.sendStatus(204);
  });
}
