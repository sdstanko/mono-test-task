import { Schema, model, ObjectId } from 'mongoose';

const ModelSchema = new Schema({
    makeId: { type: ObjectId, ref: 'Make', required: true },
    name: { type: String, required: true },
    abrv: { type: String }
});

export const Model = model('Model', ModelSchema);
