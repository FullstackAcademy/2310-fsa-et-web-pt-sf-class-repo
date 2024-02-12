const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

app.post("/api/register", async (req, res) => {
  try {
    await prisma.user.create({
      data: req.body,
    });
    res.status(201).send("user created");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(201).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on - http://localhost:${port}`);
});
