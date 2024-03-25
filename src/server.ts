import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Routes
import userRouter from './User/routes/user.routes';

const app = express();

// Middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json())

// Routes
app.use(userRouter)

export default app;
