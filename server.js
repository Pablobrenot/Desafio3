const express = require("express");
const Contenedor = require("index.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const productos = new Contenedor

app.get("/productos", async (_req, res) => {
    try {
      const result = await productos.getAll();
      res.send({ data: result });
    } catch (error) {
      console.log(error);
      res.send({ data: [] });
    }
  });
  
  app.get("/productoRandom", async (_req, res) => {
    try {
      const result = await productos.getAll();
      const randomIndex = Math.floor(Math.random() * (result.length  + 1));
      res.send(result[randomIndex]);
    } catch (error) {
      res.status(404).send({ data: null, error: `Archivo inexistente` });
    }
  });