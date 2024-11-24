import * as dao from "./dao.js";

export default function QuestionsRoutes(app) {
    app.delete("/api/questions/:quesId", async (req, res) => {
        const { quesId } = req.params;
        const status = await dao.deleteQuestion(quesId);
        res.send(status);
      });
      app.put("/api/questions/:quesId", async (req, res) => {
        const { quesId } = req.params;
        const questionUpdates = req.body;
        const status = await dao.updateQuestion(
            quesId,
            questionUpdates
        );
        res.json(status);
      });
}
