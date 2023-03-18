
Ejemplo de cómo crear una API REST con cuatro endpoints en Express ECMAScript Modules para consultar, crear, actualizar y eliminar contactos desde un archivo JSON llamado "agenda.js".

Luego, crea un directorio llamado "api" y dentro de él crea dos archivos: "agenda.js" (donde se almacenarán los contactos) y "app.js" (donde se definirá la lógica de la API REST).

# Forma de utilizar
En este ejemplo, estamos utilizando las importaciones y exportaciones de módulos de ECMAScript 6. También estamos usando el módulo body-parser para procesar las solicitudes de entrada en formato JSON.

El primer endpoint (GET /contactos) devuelve todos los contactos almacenados en el archivo "agenda.js".

El segundo endpoint (POST /contactos) crea un nuevo contacto y lo agrega al archivo "agenda.js". También asigna un ID único al contacto.

El tercer endpoint (PUT /contactos/:id) actualiza un contacto existente en el archivo "agenda.js" con la información proporcionada en la solicitud. También verifica que
