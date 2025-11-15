import express from 'express';
import Ad from '../models/Ad.js';

const router = express.Router();

// GET /api/ads - получить все объявления
router.get('/', async (req, res) => {
  try {
    const ads = await Ad.find().sort({ createdAt: -1 });
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/ads - создать новое объявление
router.post('/', async (req, res) => {
  try {
    const { title, description, price, imageUrl } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: "Заголовок обязателен" });
    }

    const ad = new Ad({ 
      title, 
      description: description || "", 
      price: price || null, 
      imageUrl: imageUrl || "" 
    });
    
    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
