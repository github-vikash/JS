const mongoose = require("mongoose");

const studentSchema =new  mongoose.Schema({
    Name: String,
    Id: String,
    Department: String
},{
    timestamps: true
});

module.exports = mongoose.model("student",studentSchema);