const ProgramApi = require("../../middleware/services/eduPhoenix/program.js");

module.exports = (request, response) => {
  let degreeInterest = request.query.interest;
  let programLevel = request.query.level;
  ProgramApi.getProgramInfo(data => {
    let programs = data.results.map(program => {
      return {
        name: program.title,
        level: program.programLevelName,
        interest: program.areaOfInterest,
        infoUrl: program.attributes.ref,
        maxTuition: program.gainfulEmployment.tuitionFeesMax,
        monthsToComplete: program.gainfulEmployment.normalCompletionTimeMonths
      };
    });

    programs = programs.filter(
      program =>
        programLevel
          ? program.level.toLowerCase() === programLevel.toLowerCase()
          : program,
      {}
    );

    programs = programs.filter(
      program =>
        degreeInterest
          ? program.name.toLowerCase().indexOf(degreeInterest.toLowerCase()) !==
              -1 ||
            program.interest
              .toLowerCase()
              .indexOf(degreeInterest.toLowerCase()) !== -1
          : program,
      {}
    );

    response.setHeader("Content-type", "application/json");
    response.json(programs);
  });
};
