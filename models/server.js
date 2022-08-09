import express from "express";
import cors from "cors";
import { dbConnection } from "../db/connection.js";
import { router as tasks_routes } from "../router/task.routes.js";
import { errorHandlerMiddleware } from "../middleware/error-handler.js";
import { notFound } from "../middleware/not-found.js";

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            tasks: "/api/tasks",
        };
        this.connectDB();
        this.middlewares();
        this.router();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    router() {
        this.app.use(this.paths.tasks, tasks_routes)
        // middleware que muestra: "Route does not exist" en caso no exista la ruta:
        this.app.use(notFound)
        // middleware que oculta los errores por consola y response
        this.app.use(errorHandlerMiddleware)
    }

    listen() {
        this.app.listen(this.port, () =>
            console.log(`Server running on port: ${this.port}`)
        );
    }
}
