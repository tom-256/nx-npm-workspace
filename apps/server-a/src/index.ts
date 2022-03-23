import express from "express";
const app = express();
app.get("/api", (req, res) => {
  res.send({ message: "server-a" });
});

const port = process.env.port || 8888;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
