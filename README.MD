
In this application, I built the express-axios application to implement the AI to CRUD (Create, Read, Update, Delete) data in JSON format to/from the Pantry using Axios.

Also, I used the "dotenv" to facilitate the passing of the Pantry parameter using the PANTRY NAME (BASKET name), instead of PANTRY ID, for security purposes. PANTRY ID is used internally, and we only use the BASKET name via the localhost to pass the info about the particular BASKET.

The "hidden" BASKET_ID is stored in the .env file.

Used Pantry API (https://getpantry.cloud/) which allows for a better JSON storage solution.

Also, I used the POSTMAN application to test the POST, GET, PUT and DELETE data to/from the Pantry via the localhost.
