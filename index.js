import express from "express";
const app = express();
const port = process.env.Port || 8000;
import router from './router/router.js';
import authRouter from './router/authRouter.js';
import bodyParser from 'body-parser';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/register/', router);
app.use('/login/', authRouter);

app.listen(port, console.log('port is running in http://localhost:'+port))