const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

require("./routes/routes.js")(app);

/* eslint-disable no-console */
app.listen(port, () => console.log(`API backend listening on port ${port}`));
/* eslint-enable no-console */
