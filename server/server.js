const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

// dotenv configuration
dotenv.config({ path: "server/config.env" });
port = process.env.PORT;

// Database connection
connectDB();

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
