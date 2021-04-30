const rules = [
    {
        attributeName: "id",
        validate: (value) =>
            typeof value === "number" && value % 1 === 0 && value > 0,
        error: `Id must be an integer greater than 0`,
    },
    {
        attributeName: "Bookname",
        validate: (value) => typeof value === "string",
        error: `BookName must be a string`,
    },
    {
        attributeName: "Author",
        validate: (value) => typeof value === "string",
        error: `Author must be a string`,
    },
    {
        attributeName: "Publish year",
        validate: (value) =>
            typeof value === "number" && value % 1 === 0 && value > 0,
        error: `Publish year must be an integer greater than 0`,
    },
    {
        attributeName: "isArchieved",
        validate: (value) => typeof value === "boolean",
        error: `isArcheived needs to be a boolean`,
    },
];

module.exports = {
    rules,
};
