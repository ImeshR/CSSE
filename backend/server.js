import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import sitemanagerController from "./controllers/sitemanger/sitemanger.js";
import staffController from "./controllers/staff/staff.js";

class DatabaseConnection {
  constructor() {
    this.connected = false;
    this.connect();
  }

  connect() {
    if (this.connected) {
      return;
    }

    const URL = process.env.MONGODB_URI;

    mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;

    connection.once("open", () => {
      console.log("Mongodb Connection success!");
      this.connected = true;
    });

    connection.on("disconnected", () => {
      console.log("Mongodb disconnected!");
    });

    connection.on("error", (err) => {
      console.error("Mongodb connection error:", err);
    });
  }
}

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

// Singleton instance of the database connection
const dbConnection = new DatabaseConnection();

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/sitemanager", sitemanagerController);
app.use("/api/staff", staffController);

app.listen(PORT, () => {
  console.log("Connected to Backend");
  console.log("Server is running on port: " + PORT);
});
