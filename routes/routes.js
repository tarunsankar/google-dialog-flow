module.exports = app => {
  require("./program/programApiRoutes.js")(app);
  require("./career/careerWithProgramApiRoutes.js")(app);
  require("./dialog-flow/dialog-flow.js")(app);

  app.get("*", function(request, response) {
    response
      .status(200)
      .send("This is a REST based application and does not render a front end");
  });
};
