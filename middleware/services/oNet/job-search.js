const axios = require("axios").default;

const apiAuth = `Basic ${process.env.ONET_KEY}`;

const findCareer = (searchTerm, callback) => {
  axios
    .get(`${process.env.ONET_BASE_URL}/mnm/search?keyword=${searchTerm}`, {
      headers: {
        Authorization: apiAuth
      }
    })
    .then(response => callback({ data: response.data }))
    .catch(error => {
      if (error.response) {
        if (error.response.status < 200 || error.response.status > 299) {
          callback({ error: error });
        }
      }
    });
};

module.exports = {
  findCareer
};
