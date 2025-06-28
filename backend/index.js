import dotenv from "dotenv"
dotenv.config()

import express from "express"

import cors from "cors"
import connectDB from "./config/db.js"

import morgan from "morgan";
import cookieParser from "cookie-parser";
import { errorhandler,routeNotFound } from "./middlewares/errorMiddleware.js";

// routes
import authRoutes from './routes/authRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import pollRoutes from './routes/pollRoutes.js';
import calendarRoutes from './routes/calendarRoutes.js';
import announcementRoutes from './routes/announcementRoutes.js';


const app = express()

//for now accepting all origins, later you can specify the origin
app.use(
    cors({
    origin: ['*', 'http://localhost:5173'], // Change this to your frontend URL in production
    methods:['GET',"POST","PUT","DELETE"],
    credentials:true,
}))

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan("dev"))

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/polls', pollRoutes);
app.use('/api/calendar', calendarRoutes);
app.use('/api/announcements', announcementRoutes);

app.use(routeNotFound)
app.use(errorhandler)

connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
