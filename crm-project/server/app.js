import express from "express";
import mongoose from "mongoose";
import config from "./config";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";

// Routes
import postRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import promotionRoutes from "./routes/api/promotion";
import authRoutes from "./routes/api/auth";

const app = express();
const { MONGO_URI } = config;

// Server 보안 라이브러리
app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));

app.use(express.json());

// DB Connect
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connecting Success !!".blue))
  .catch((e) => console.log(e));

// Use Routes
app.get("/");
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/promotion", promotionRoutes);

export default app;
