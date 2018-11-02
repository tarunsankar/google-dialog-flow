const programsWithFilter = require("../../services/programs/programsWithFilter.js");

module.exports = app => {
  app.get("/api/programs", programsWithFilter);
};
