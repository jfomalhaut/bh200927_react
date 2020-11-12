import express from "express";
import mongoose from "mongoose";
import config from "./config";
import colors from "colors";

import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

// Routes
import postsRoutes from "./routes/api/post";
import marketRoutes from "./routes/api/market";
import orderRoutes from "./routes/api/order";
import promotionRoutes from "./routes/api/promotion";
import userRoutes from "./routes/api/user";

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));

app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connecting Success !!".blue))
  .catch((e) => console.log(e).red);

//   Use Router
app.get("/");
app.use("/api/post", postsRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/promotion", promotionRoutes);
app.use("/api/user", userRoutes);

export default app;
