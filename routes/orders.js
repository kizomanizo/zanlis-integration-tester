const Express = require("express");
const Router = Express.Router();
const axios = require("axios");
require("dotenv").config();

Router.route("/").post(function (req, res, next) {
  const orderPayload = req.body;
  if (orderPayload) {
    res.status(201).send({
      status: 200,
      message: "Lab order accepted",
      order_id: orderPayload.order_id,
    });
  } else {
    res.status(400).send({
      status: 400,
      message: "Unmapped test code",
    });
  }
});

Router.route("/results").post(async function (req, res, next) {
  const resultsEndpoint =
    process.env.RESULTS_ENDPOINT + process.env.ACCESS_TOKEN;
  await axios
    .post(resultsEndpoint, req.body)
    .then((response) => {
      res.status(200).send({
        status: 200,
        message: response.data,
      });
    })
    .catch((error) => {
      console.error(error.response.data);
    });
});

module.exports = Router;
