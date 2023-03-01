const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    hobby : {
        type : Array,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    // avatar : {
    //     type : String,
    //     required : true
    // },
});

const Admin = mongoose.model('admin',AdminSchema);
module.exports = Admin;