const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: String,
    email:String,
    designation: String,
    address:String,
    phoneNo:String,

}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);