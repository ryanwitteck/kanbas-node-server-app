import * as dao from "./dao.js";

export default function ScoreRoutes(app) {
  app.put("/api/scores/:scoreId", async (req, res) => {
    const { scoreId } = req.params;
    const scoreUpdates = req.body;
    scoreUpdates.answers = Object.keys(scoreUpdates.answers).map((questionId) => ({
      questionId,
      answer: scoreUpdates.answers[questionId],
    }));
    const status = await dao.updateScore(scoreId, scoreUpdates);
    res.json(status);
  });

  const getScoreForUser = async (req, res) => {
    let { uid, qid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await dao.findScoresForUser(uid, qid);
    res.json(status);
  };

  const getScoresByUser = async (req, res) => {
    let { uid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await dao.findScoresByUser(uid);
    res.json(status);
  };
  const insertScoreForUser = async (req, res) => {
    const { uid, qid, tally } = req.params;
    const score = {
      ...req.body,
      quiz: qid,
      user: uid,
      score: tally,
    };
    score.answers = Object.keys(score.answers).map((questionId) => ({
      questionId,
      answer: score.answers[questionId],
    }));

    const newScore = await dao.createScore(score);
    res.send(newScore);
  };

  app.get("/api/users/:uid/scores/:qid", getScoreForUser);
  app.get("/api/users/:uid/scores", getScoresByUser);

  app.post("/api/users/:uid/scores/:qid/:tally", insertScoreForUser);
}
