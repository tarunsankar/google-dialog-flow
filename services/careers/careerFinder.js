const CareerApi = require("../../middleware/services/oNet/job-search");
const JobCipToDegreeCip = require("../../middleware/services/staticJson/jobs-cips-with-degree-cips");
const DegreeCipToDegreeInfo = require("../../middleware/services/staticJson/degrees-with-cip");

module.exports = (request, response) => {
  let searchTerm = request.query.searchTerm;
  let searchWords = searchTerm.match(/\S+/g);
  let searchRankRegex = searchWords
    ? new RegExp(`(?:${searchWords.join("|")})`, "gi")
    : "";

  response.setHeader("Content-type", "application/json");

  if (!searchTerm) {
    response.json({ error: "'searchTerm' is missing" });
    return;
  }
  CareerApi.findCareer(searchTerm, callback => {
    let jsonReponse = {
      response: `Sorry, I was unable to find anything related to "${searchTerm}"`
    };

    if (callback.error) {
      jsonResponse.response = `Sorry, I had trouble finding information on "${searchTerm}"`;
    } else {
      let validCareers = callback.data.career
        .map(career => {
          return {
            name: career.title,
            jobCip: career.code,
            matchCount: (career.title.match(searchRankRegex) || []).length,
            programCips: JobCipToDegreeCip.filter(
              jobToDegree => jobToDegree.JobCip === career.code
            ).map(jobToDegree => jobToDegree.ProgramCip)
          };
        }, {})
        .filter(career => (career.programCips || []).length > 0)
        .sort((current, next) => next - current);

      let firstMatch = validCareers[0];

      if (firstMatch) {
        let degrees = DegreeCipToDegreeInfo.filter(degree =>
          firstMatch.programCips.some(cips => cips === degree.CIP)
        ).map(degree => degree.DisplayName);
        jsonReponse.response = `I looked up "${searchTerm}" and found ${
          firstMatch.name
        }. Which maps to the following degree programs ${degrees.join(", ")}`;
      }
    }

    response.json(jsonReponse);
  });
};
