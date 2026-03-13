import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employee = {
    name: "Test",
    birthday: new Date (),
    salary: 75000,
  };
  createEmployee(employee);
}
