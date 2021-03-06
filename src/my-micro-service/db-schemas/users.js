"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
;
let Schema = mongoose.Schema;
let mySchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    total_creditline: { type: String },
    available_creditline: { type: String },
    message: { type: String },
    data: { type: mongoose.SchemaTypes.Mixed },
});
exports.default = mongoose.model('users', mySchema);
