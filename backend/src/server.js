require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();
const userRouter = require("./routers/auth");

app.use(express.json());
app.use("/api/auth", userRouter);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
