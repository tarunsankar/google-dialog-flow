const careerFinder = require("../../services/careers/careerFinder");

module.exports = app => {
  app.get("/api/career", careerFinder);
};
