const express= require ("express"); //framework for building API 

const errorHandler = require("./middleware/errorHandler"); // custom middleware for handling errors globally 

const connectDb = require("./config/dbConnections"); //Function to establish a connection with MongoDB.

const dotenv = require ("dotenv").config(); // Loads environment variables from a .env file into process.env.

connectDb(); //initiates a nconnection to the mongoDB database 

const app= express(); // creates an express application

const port = process.env.PORT || 5000; //Sets the port on which the server will listen. It tries to use the PORT environment variable; if not found, it defaults to 5000.

//Below are middlewares 

app.use(express.json()) //Adds middleware to parse JSON request bodies.

app.use("/api/contacts", require("./routes/contactRoutes"))   // Mounts the contact routes under the /api/contacts path.
app.use("/api/users", require("./routes/userRoutes"))   // Mounts the contact routes under the /api/contacts path.

app.use(errorHandler) //Adds a custom error-handling middleware


app.listen(port, ()=>{
    console.log(`server runnning on ${port}`);
})  // Starts the server and logs a message to the console indicating the port it's running on.