import * as assignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = assignmentDao.findAssignmentsForCourse(courseId);
    res.json(assignment);
    });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    assignmentDao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const x = assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
    res.json(x)
    });
  
}
