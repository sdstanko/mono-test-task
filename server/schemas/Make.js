import { Schema, model, ObjectId } from 'mongoose';

const MakeSchema = new Schema({
    name: { type: String, unique: true, required: true },
    abrv: { type: String, unique: true },
    models: [{ type: ObjectId, ref: 'Model' }],
});

export const Make = model('Make', MakeSchema);
