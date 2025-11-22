import express from 'express';
import Ad from '../models/Ad.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const ads = await Ad.find().sort({ createdAt: -1 });
        res.json(ads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, price, imageUrl, contacts } = req.body;
        const ad = new Ad({ title, description, price, imageUrl, contacts });
        await ad.save();
        res.status(201).json(ad);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
