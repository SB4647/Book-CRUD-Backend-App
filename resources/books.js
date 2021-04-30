const { rules } = require("../rules/books");
const { validate } = require("../utils/validation");
const express = require("express");

const Book = require("../models/model");

const router = express.Router();

router.get("/", async (request, response) => {
    const books = await Book.all();

    const bookArcheived = await books.filter(
        (book) => book.isArchieved === true
    );

    response.send(await bookArcheived);
});

router.get("/:id", async (request, response) => {
    const id = request.params.id;
    const record = await Book.find(id);

    if (!record) {
        return response.status(404).send({
            message: `Book with id => ${id} does not exist`,
        });
    }

    response.send(record);
});

router.post("/", async (request, response) => {
    const requestBody = request.body;
    //set isArchieved to false
    requestBody.isArchieved = false;
    const [validatedData, errors] = validate(requestBody, rules, true);

    if (errors.length) {
        return response.status(400).send(errors);
    }

    const record = await Book.create(validatedData);

    response.status(201).send(record);
});

router.patch("/:id", async (request, response) => {
    const requestBody = request.body;
    const id = request.params.id;
    const [validatedData, errors] = validate(requestBody, rules, false);

    if (errors.length) {
        return response.status(400).send(errors);
    }

    const record = await Book.update(id, validatedData);

    if (!record) {
        return response.status(404).send({
            message: `Document with id => ${id} does not exist`,
        });
    }

    response.send(record);
});

router.delete("/:id", async (request, response) => {
    const id = request.params.id;
    const record = await Book.delete(id);

    if (!record) {
        return response.status(404).send({
            message: `Book with id => ${id} does not exist`,
        });
    }

    response.status(200).send(record);
});

module.exports = router;
