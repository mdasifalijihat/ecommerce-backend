import express, { Application, Request, Response } from "express";
import cors from "cors";
import { auth } from "./app/lib/auth";
import { toNodeHandler } from "better-auth/node";

const app: Application = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

// better auth
app.all("/api/auth/*", toNodeHandler(auth));

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

export default app;
