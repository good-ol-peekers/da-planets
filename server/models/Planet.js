import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
    name: {type: String, required: true, },
    imgUrl: {type: String, required: false,},
    galaxyId: {type: ObjectId, ref: 'Galaxy', required: true, }
}, { timestamps: true, toJSON: { virtuals: true } }
)

