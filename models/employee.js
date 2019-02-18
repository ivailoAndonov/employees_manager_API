const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'name must be smaller than 20 !'
        },
    },
    age: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'age must be smaller than 20 !'
        }
    },
    arrivalDate: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'arrivalDate must be smaller than 20 !'
        }
    },
    skill: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'skills must be smaller than 20 !'
        }
    },
    salary: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'salary must be smaller than 20 !'
        }
    },
    sector: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'sector must be smaller than 20 !'
        }
    },
    nationality: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'nationality must be smaller than 20 !'
        }
    },
    timeInCompany: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length < 20;
            },
            message: 'timeInCompany must be smaller than 20 !'
        }
    },
    contacts: {
        address: {
            type: String,
            required: true,
            validate: {
                validator: (v) => {
                    return v.length < 20;
                },
                message: 'contacts must be smaller than 20 !'
            }
        },
        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: (v) => {
                    return v.length < 20;
                },
                message: 'phoneNumber must be smaller than 20 !'
            }
        },
        mail: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: (email) => {
                    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return reg.test(String(email).toLowerCase());
                },
                message: 'invalid email!'
            },
        }
    },
    noLongerEmployee: {
        type: Boolean,
        default: false
    }
})

module.exports = Employee = mongoose.model('employees', EmployeeSchema);
