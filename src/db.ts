import Continent from "./entities/Continent";
import Country from "./entities/Country";
import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Country, Continent],
  synchronize: true,
});
