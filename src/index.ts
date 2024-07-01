import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import env from "./env";
import schemaIsBuilt from "./schema";
import { db } from "./db";

const { SERVER_PORT: port } = env;

const main = async () => {
  schemaIsBuilt.then(async (schema) => {
    await db.initialize();
    const server = new ApolloServer({ schema });
    try {
      const { url } = await startStandaloneServer(server, { listen: { port } });
      console.log(`server ready on ${url}`);
    } catch (error) {
      console.error("Error starting server:", error);
    }
  });
};

main();
