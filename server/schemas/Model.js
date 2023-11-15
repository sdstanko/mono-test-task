import { Schema, model, ObjectId } from 'mongoose';

const ModelSchema = new Schema({
    makeId: { type: ObjectId, ref: 'Make', required: true },
    name: { type: String, unique: true, required: true },
    abrv: { type: String, unique: true },
});

export const Model = model('Model', ModelSchema);
