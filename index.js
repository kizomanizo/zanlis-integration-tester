require("dotenv").config();
const Express = require("express");
const app = Express();
const port = process.env.PORT || 3005;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.post("/api/v1/orders", (req, res, next) => {
  try {
    res.status(200).json({
      status: 200,
      success: true,
      message: req.body,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.listen(port, () => {
  console.log("**** App is started on " + port + " ****");
});

module.exports = app;
