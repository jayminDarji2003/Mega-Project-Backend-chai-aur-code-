import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// ------------- configuration start here --------------------

// here we are accepting json formate data.
app.use(express.json({
    limit: "16kb",
}))

// here we are accepting data from url. 
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

//keep some images, pdfs, documents 
app.use(express.static("public"))

// for cookies
app.use(cookieParser)

// ------------- configuration ends here --------------------

export { app };