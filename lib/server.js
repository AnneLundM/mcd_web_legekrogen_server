// Server Modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// Routes
import indexRouter from './routes/mcd/www/index.route.js';
import authRouter from './routes/auth/auth.js';
import authTokenRouter from './routes/auth/token.js';
import userRouter from './routes/users/user.route.js';
import usersRouter from './routes/users/users.route.js';

// Site ROutes
import pocRouter from './routes/mcd/poc/poc.route.js';
import previewRouter from './routes/mcd/preview/preview.route.js';

import * as path from 'path';
import * as url from 'url';
import qandasRouter from './routes/qanda/qandas.routes.js';
import productsRoute from './routes/products/products.route.js';
import productRoute from './routes/products/product.route.js';
import reviewRoute from './routes/reviews/review.route.js';
import reviwesRoute from './routes/reviews/reviews.route.js';
import subscriberRouter from './routes/subscribers/subscriber.route.js';
import subscribersRouter from './routes/subscribers/subscribers.route.js';
import orderRoute from './routes/orders/order.route.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

const server = {};
const expressServer = express();
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));
expressServer.use(cors());
expressServer.use(cookieParser());

// Serve static files from the public and www directories.
expressServer.use(express.static('[mcd]'));
expressServer.use(express.static('public'));
expressServer.use(express.static('sites'));

/*

  Routes

*/

// Index Client Frontend Routes
expressServer.use(indexRouter);

// Backend API Routes
expressServer.use(authRouter);
expressServer.use(authTokenRouter);

// Backend API Users Routes
expressServer.use(usersRouter);
expressServer.use(userRouter);

// Project Specific Routes.
expressServer.use(qandasRouter);

expressServer.use(productsRoute);
expressServer.use(productRoute);

expressServer.use(reviewRoute);
expressServer.use(reviwesRoute);

expressServer.use(subscriberRouter);
expressServer.use(subscribersRouter);

expressServer.use(orderRoute  );






// Sites Management

// POC
expressServer.use(express.static(path.join(__dirname, "../sites", "poc")));
expressServer.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../sites", "poc", "index.html"));
});

// Preview
expressServer.use(express.static(path.join(__dirname, "../sites", "preview")));
expressServer.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../sites", "preview", "index.html"));
});

// WWW
expressServer.use(express.static(path.join(__dirname, "../sites", "www")));
expressServer.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../sites", "www", "index.html"));
});

// Vanilla
expressServer.use(express.static(path.join(__dirname, "../sites", "vanilla")));
expressServer.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../sites", "vanilla", "index.html"));
});

/*

  Run Server

*/
server.run = () => {

    console.log('\n\n---------------------');
    console.log('Server Started', process.env.NODE_ENV, process.env.SERVER_HOST);
    console.log('\n\n---------------------');

    expressServer.listen(process.env.SERVER_PORT, () =>
      console.log(`Running : ${process.env.SERVER_PORT}`),
    );

}


export default server;


