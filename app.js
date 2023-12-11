// Imports e inicializaciones de variables
const express = require("express");
const librosRouter = require("./routes/libros");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 3000;

// Middlewares y routes del Servidor
app.use(express.json());
app.use("/libros", librosRouter);
app.use(errorHandler);

// Inicializacion del servidor en el puerto 3000
app.listen(port, () => console.log(`Server running at port:${port}`));