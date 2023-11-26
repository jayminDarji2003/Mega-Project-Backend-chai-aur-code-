import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// here we are accepting json formate data.
app.use(express.json({
    limit: "16kb",
}))

// here we are accepting data from url. 

export { app };