const { body, validationResult } = require('express-validator');

exports.validateStudent = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('course').notEmpty(),
  body('age').isNumeric(),
  (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }
    next();
  }
];
