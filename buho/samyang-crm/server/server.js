import app from "./app";
import colors from "colors";
import config from "./config/index";

const { PORT } = config;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`.blue);
});
