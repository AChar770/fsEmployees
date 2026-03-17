import express from "express";
import employeeRouter from "./api.employees.js";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the Fs Employees API.");
});

app.use ("/employees", employeesRouter);

export default app;
