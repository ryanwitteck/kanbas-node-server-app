import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
    const enrollments = await dao.findCoursesForUser(userId);
    res.json(enrollments);
  });
}
