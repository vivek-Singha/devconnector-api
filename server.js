const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

const app = express();

//* configuring dotenv
dotenv.config();

//* Initializing middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Connecting to the database through mongoose
connectDb();

app.use("/api/users", require("./routes/api/usersRoutes"));

app.use("/api/auth", require("./routes/api/authRoutes"));

app.use("/api/profile", require("./routes/api/profileRoutes"));

app.use("/api/posts", require("./routes/api/postsRoutes"));

app.get("/", (req, res) => {
  res.send("API Runing");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App listening on port " + PORT + "!");
});
