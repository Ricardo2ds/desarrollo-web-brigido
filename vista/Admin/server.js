const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000; // Cambia este puerto si es necesario

// Reemplaza con tus credenciales de conexión
const uri = "mongodb+srv://ricardododds2garrido:1234@cluster0.bq7cr.mongodb.net/biblioteca_db?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

app.use(express.json());

// Inicia el servidor
app.listen(port, async () => {
    try {
        await client.connect();
        console.log("Conexión a la base de datos establecida");

        // Crear una colección de ejemplo y agregar documentos si no existe
        const database = client.db("biblioteca_db");
        const collection = database.collection("ejemplo");

        // Insertar documentos de ejemplo
        const ejemploData = [
            { nombre: "Ejemplo 1", descripcion: "Descripción del ejemplo 1" },
            { nombre: "Ejemplo 2", descripcion: "Descripción del ejemplo 2" },
            { nombre: "Ejemplo 3", descripcion: "Descripción del ejemplo 3" },
        ];

        const result = await collection.insertMany(ejemploData);
        console.log(`${result.insertedCount} documentos insertados en la colección 'ejemplo'.`);

        console.log(`Servidor escuchando en http://localhost:${port}`);
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
});
