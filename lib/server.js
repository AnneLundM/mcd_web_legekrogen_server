import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as path from "path";
import * as url from "url";
import { createServer } from "@vercel/node";

// Routes
import indexRouter from "./routes/mcd/www/index.route.js";
import authRouter from "./routes/auth/auth.js";
import authTokenRouter from "./routes/auth/token.js";
import userRouter from "./routes/users/user.route.js";
import usersRouter from "./routes/users/users.route.js";
import qandasRouter from "./routes/qanda/qandas.routes.js";
import productsRoute from "./routes/products/products.route.js";
import productRoute from "./routes/products/product.route.js";
import reviewRoute from "./routes/reviews/review.route.js";
import reviwesRoute from "./routes/reviews/reviews.route.js";
import subscriberRouter from "./routes/subscribers/subscriber.route.js";
import subscribersRouter from "./routes/subscribers/subscribers.route.js";
import orderRoute from "./routes/orders/order.route.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const expressServer = express();

// Middleware
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));
expressServer.use(cors());
expressServer.use(cookieParser());

// Serve static files
expressServer.use(express.static("public"));
expressServer.use(express.static("sites"));

// Routes
expressServer.use(indexRouter);
expressServer.use(authRouter);
expressServer.use(authTokenRouter);
expressServer.use(usersRouter);
expressServer.use(userRouter);
expressServer.use(qandasRouter);
expressServer.use(productsRoute);
expressServer.use(productRoute);
expressServer.use(reviewRoute);
expressServer.use(reviwesRoute);
expressServer.use(subscriberRouter);
expressServer.use(subscribersRouter);
expressServer.use(orderRoute);

// Sites Management
const sitePaths = ["poc", "preview", "www", "vanilla"];

sitePaths.forEach((site) => {
  expressServer.use(express.static(path.join(__dirname, "../sites", site)));
  expressServer.use((req, res) => {
    res.sendFile(path.join(__dirname, "../sites", site, "index.html"));
  });
});

// 🚀 **NYT: Eksportér en serverless funktion til Vercel**
export default createServer(expressServer);
