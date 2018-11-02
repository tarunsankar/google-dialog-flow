// const { WebhookClient } = require("dialogflow-fulfillment");
const CareerApi = require("../../middleware/services/oNet/job-search");
const JobCipToDegreeCip = require("../../middleware/services/staticJson/jobs-cips-with-degree-cips");
const DegreeCipToDegreeInfo = require("../../middleware/services/staticJson/degrees-with-cip");

const errorResultStatement =
  "I'm sorry, I was unable to get the data you requested.";

const buildChatResponse = message => {
  return JSON.stringify({ fulfillmentText: message });
};

const getCareerInfo = (searchTerm, callback) => {
  let searchWords = searchTerm.match(/\S+/g);
  let searchRankRegex = searchWords
    ? new RegExp(`(?:${searchWords.join("|")})`, "gi")
    : "";

  CareerApi.findCareer(searchTerm, result => {
    let jsonReponse = {
      response: `Sorry, I was unable to find anything related to "${searchTerm}"`
    };

    if (result.error) {
      jsonResponse.response = `Sorry, I had trouble finding information on "${searchTerm}"`;
    } else {
      let validCareers = result.data.career
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
        }.`;
        if (degrees) {
          jsonReponse.response += ` Which maps to the following degree programs ${degrees.join(
            ", "
          )}`;
        } else {
          jsonReponse.response += ` Unforutnately, I am unable to match any degrees or certifications.`;
        }
      }
    }

    callback(jsonReponse.response);
  });
};

module.exports = app => {
  app.post("/api/dialogflow", (request, response) => {
    //console.log(request.body);
    const action = request.body.queryResult.action;

    if (action !== "input.careerInfo") {
      response.send(
        buildChatResponse("I'm sorry, I don't know how to fulfill this request")
      );
      return;
    }

    const parameters = request.body.queryResult.parameters;
    let careerRequest = parameters["career_request"];

    getCareerInfo(careerRequest, message => {
      response.send(buildChatResponse(message));
    });

    //const agent = new WebhookClient({request: request, response: response});
    //agent.handleRequest()
  });
};
