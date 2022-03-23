import express from "express";
import { packageA } from "@nx-npm-workspace/package-a";

const message = `
server-a
server-a use ${packageA()}
`;

const app = express();
app.get("/api", (req, res) => {
  res.send({ message });
});

const port = process.env.port || 8888;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
