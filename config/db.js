const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://iamfarhan:iamfarhan@ecom.1lzv65c.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
