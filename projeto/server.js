const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Endpoints
app.get('/services', async (req, res) => {
  const services = await prisma.service.findMany({
    include: { user: true },
  });
  res.json(services);
});

app.post('/services', async (req, res) => {
  const { title, description, price, userId } = req.body;
  const service = await prisma.service.create({
    data: { title, description, price, userId },
  });
  res.json(service);
});

// Start server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
