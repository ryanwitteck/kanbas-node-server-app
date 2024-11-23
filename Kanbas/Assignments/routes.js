import * as assignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignment = await assignmentDao.findAssignmentsForCourse(courseId);
    res.json(assignment);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentDao.deleteAssignment(assignmentId);
    res.send(status);
  });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.json(status);
  });
}
