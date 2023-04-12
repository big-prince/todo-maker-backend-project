const joi = require('joi');

//making the validation
const taskValidation = data =>{
    const schema = joi.object({
        name: joi.string().required(),
        task: joi.string().required(),
        time: joi.string().required(),
        duration: joi.string().required()
    });
    return schema.validate(data)
};

//validation2
const findValidation = data =>{
    const schema = joi.object({
        name: joi.string().required()
    });
    return schema.validate(data)
}

module.exports.taskValidation = taskValidation
module.exports.findValidation = findValidation