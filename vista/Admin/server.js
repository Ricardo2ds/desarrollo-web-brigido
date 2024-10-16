const { MongoClient } = require('mongodb');

// Reemplaza con tus credenciales y la base de datos real que estás utilizando
const uri = "mongodb+srv://ricardododds2garrido:1234@cluster0.bq7cr.mongodb.net/biblioteca_db?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Conectado a MongoDB");

        const database = client.db("biblioteca_db"); // Nombre de tu base de datos
        const collection = database.collection("ejemplos"); // Nombre de tu colección

        // Crear un documento para insertar
        const doc = {
            nombre: "Ejemplo",
            descripcion: "Este es un documento de ejemplo",
            fecha: new Date(),
        };

        // Insertar el documento
        const result = await collection.insertOne(doc);
        console.log(`Documento insertado con el _id: ${result.insertedId}`);

        // Recuperar y mostrar todos los documentos de la colección
        const documentos = await collection.find().toArray();
        console.log("Documentos en la colección:");
        console.log(documentos);
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
