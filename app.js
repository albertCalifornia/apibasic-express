import express from "express";
import bodyParser from "body-parser";
import contactos from "./agenda.js";
//! ------------------------------------------------------------
import { join } from 'path';
const publicPath = join(process.cwd(), 'public');

//! ------------------------------------------------------------

const app = express();
app.use(express.static(publicPath));  // borrar


const PORT = 5000;
//  app.use(express.json());

// ! -----------------------------------------------------------
//? middleware app.use
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ! -----------------------------------------------------------
app.use(bodyParser.json());

// Endpoint para consultar un contacto
app.get("/contactos/:id", (req, res) => {
   const id = parseInt(req.params.id);
   const contacto = contactos.find((c) => c.id === id);
   if (contacto) {
     res.json(contacto);
   } else {
     res.status(404).json({ mensaje: "Cliente no encontrado 🥺" });
   }
 });

// Endpoint para obtener todos los contactos
app.get("/contactos", (req, res) => {
  res.json(contactos);
});

// Endpoint para crear un nuevo contacto
app.post("/contactos", (req, res) => {
  const contacto = req.body;
  contacto.id = contactos.length + 1;
  contactos.push(contacto);
  res.status(201).json(contacto);
});

// Endpoint para actualizar un contacto existente
app.put("/contactos/:id", (req, res) => {
  const id = Number(req.params.id);
  const contacto = req.body;
  const indice = contactos.findIndex(c => c.id === id);
  if (indice !== -1) {
    contactos[indice] = { ...contactos[indice], ...contacto };
    res.json(contactos[indice]);
  } else {
    res.status(404).send();
  }
});

// Endpoint para eliminar un contacto existente
app.delete("/contactos/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = contactos.findIndex(c => c.id === id);
  if (indice !== -1) {
    contactos.splice(indice, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

// Route to handle any other request
app.get('*', (req, res) => {
  res.status(404).sendFile(join(publicPath, '404.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`📒Servidor iniciado en http://localhost:${PORT}`);
});