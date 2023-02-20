const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/websiteRegistration", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected Successfully!!");
  }
});
