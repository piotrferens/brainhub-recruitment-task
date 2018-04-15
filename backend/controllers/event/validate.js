const { check, validationResult } = require("express-validator/check");

exports.validate = [
    check("data.firstName")
        .isString()
        .withMessage("First name must be a string")
        .trim()
        .isLength({ min: 1 })
        .withMessage("Name is required"),
    check("data.lastName")
        .isString()
        .withMessage("Last name name must be a string")
        .trim()
        .isLength({ min: 1 })
        .withMessage("Last name is required"),
    check("data.email")
        .isLength({ min: 1 })
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Wrong email address"),
    check("data.date")
        .isLength({ min: 1 })
        .withMessage("Date is required")
        .isISO8601()
        .withMessage("Wrong date"),
];

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send({
            validated: req.body,
            errors: errors.mapped(),
        });
    }
    next();
};
