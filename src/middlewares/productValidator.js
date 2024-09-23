import { body, validationResult } from "express-validator";

export const productValidator = async (req, res, next) => {
    let rules = [
        body('title').trim().notEmpty().withMessage('title should not be empty'),
        body('desc').trim().notEmpty().withMessage('description should not be empty'),
        body('price').notEmpty().withMessage('price field is empty').isFloat({ min: 0 }).withMessage('price not be negative'),
        body('image').custom((value, { req }) => {
            if (!req.file) {
                throw new Error("image is required")
            }
            return true;
        })

    ]
    await Promise.all(rules.map(rule => rule.run(req)))
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        if (req.body.id) {
            let product = req.body;
            return res.status(400).render('updateform', { errors: errors.array(), product })
        }
        else {
            return res.status(400).render('form', { errors: errors.array() })
        }
    }

    next();
}