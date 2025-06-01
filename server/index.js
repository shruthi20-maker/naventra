import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import userRouter from "./router/userRoute.js";

dotenv.config();
const app = express();

// CORS configuration
app.use(cors({
    origin: true, // Allow all origins for development
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Enhanced middleware for parsing requests
app.use(express.json({ limit: '10mb' })); // Parse JSON requests
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Parse URL-encoded requests

// Additional middleware for debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    console.log('Content-Type:', req.get('Content-Type'));
    next();
});

const port = 8080;

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Contact Management API",
        status: "Server is running",
        endpoints: {
            addContact: "POST /api/v1/user/add-contact",
            getAllContacts: "GET /api/v1/user/get-contacts",
            getContactById: "GET /api/v1/user/get-contact/:id",
            updateContact: "PUT /api/v1/user/update-contact/:id",
            deleteContact: "DELETE /api/v1/user/delete-contact/:id"
        }
    });
});

app.use("/api/v1/user", userRouter);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
        console.log(`API Base URL: http://localhost:${port}/api/v1/user`);
    });
}).catch((error) => {
    console.error('Failed to connect to database:', error);
});