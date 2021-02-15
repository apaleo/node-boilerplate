import express from 'express';
import compression from 'compression'; // compresses requests

// Controllers
import * as homeController from './controllers/home';
import * as reservationsController from './controllers/reservations';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());

// Routes
app.get('/', homeController.index);
app.get('/reservations/:id', reservationsController.getReservationById);

export default app;
