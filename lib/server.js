import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as path from "path";
import * as url from "url";

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
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Serve static files
app.use(express.static("public"));
app.use(express.static("sites"));

// Routes
app.use(indexRouter);
app.use(authRouter);
app.use(authTokenRouter);
app.use(usersRouter);
app.use(userRouter);
app.use(qandasRouter);
app.use(productsRoute);
app.use(productRoute);
app.use(reviewRoute);
app.use(reviwesRoute);
app.use(subscriberRouter);
app.use(subscribersRouter);
app.use(orderRoute);

// Sites Management
const sitePaths = ["poc", "preview", "www", "vanilla"];
sitePaths.forEach((site) => {
  app.use(express.static(path.join(__dirname, "../sites", site)));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../sites", site, "index.html"));
  });
});

// 🚀 **Eksporter Express-serveren korrekt**
export default app;
