import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    contacts: { type: String, required: true },
    authorId: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Ad', adSchema);
