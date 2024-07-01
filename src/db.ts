import Country from "./entities/Country";
import env from "./env";
import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Country],
  synchronize: true,
});
