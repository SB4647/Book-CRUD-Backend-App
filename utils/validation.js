
const validate = (body, rules, strict = true) => {
    let validatedData = {};
    let errors = [];

    for (let i = 0; i < rules.length; i++) {
        const validationObject = rules[i];
        const attributeName = validationObject.attributeName;

        if (!strict && body[attributeName] === undefined) {
            continue;
        }

        if (!validationObject.validate(body[attributeName])) {
            errors.push({
                field: attributeName,
                error: validationObject.error
            });

            continue;
        }

        validatedData[attributeName] = body[attributeName];
    }

    return [validatedData, errors];
}

module.exports = {
    validate
};