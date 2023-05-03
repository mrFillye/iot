import { Sequelize } from "sequelize";

const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const db_port = process.env.POSTGRES_PORT;
const host = process.env.POSTGRES_HOST;
const db_name = process.env.POSTGRES_DB_NAME;

export const db = new Sequelize(`postgres://${user}:${password}@${host}:${db_port}/${db_name}`);

(async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("error ===>", error);
  }
})();
