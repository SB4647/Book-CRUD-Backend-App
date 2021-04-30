// # Node Project
// ## Requirement 1
// Create an API that performs basic CRUD on data of your choice, think hobbies, things you are interested in.
// ### Basic Requirements
// - Create a fresh express application
// - Create POST /your-resource
// - Create GET /your-resource -> filter by isArchived
// - Must do CRUD with firestore (no in memory business)
// ### Indepth Requirements
// - New records must be stored with an isArchived flag set to false
// - Stored object must have 3 fields + id + isArchived (5 fields total)
// - isArchived should be hidden from the user at ALL times
// - POST MUST have validation of the 3 fields, type checks, constraints before saving

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors({ allow: true }));

const books = require("./resources/books");

app.use("/books", books);

app.listen(3333, () => {
    console.log("Server is running on localhost:3333");
});
