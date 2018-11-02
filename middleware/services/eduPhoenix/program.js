const axios = require("axios");

const getProgramInfo = callback => {
  axios
    .get(`${process.env.PHOENIX_API_BASE_URL}/programs?page.size=1000`)
    .then(response => callback(response.data))
    .catch(error => {
      if (error.response) {
        if (error.response.status === 404) {
          callback(error);
        }
      }
    });
};

module.exports = {
  getProgramInfo
};
