import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: {type: String, required: true, },
    imgUrl: {type: String, required: false,},
    size: {type: String, enum: ['big big', 'big', 'still big'], required: true, default: 'big'}
}, {timestamps: true, toJSON: {virtuals: true}})