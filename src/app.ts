import express from 'express';
import compression from "compression";  // compresses requests

// Controllers
import * as homeController from "./controllers/home";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(compression());

// Routes
app.get("/", homeController.index);

export default app;
