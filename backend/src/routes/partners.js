import express from 'express';
const router = express.Router();
import Partner from '../models/partner.js';

// Middleware to get partner by ID
async function getPartner(req, res, next) {
    let partner;
    try {
        partner = await Partner.findById(req.params.id);
        if (partner == null) {
            return res.status(404).json({ message: 'Cannot find partner' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.partner = partner;
    next();
}

// GET route for getting all partners
router.get('/', async (req, res) => {
    const searchQuery = req.query.search || '';
    try {
        let partners;
        if (searchQuery) {
            partners = await Partner.find({
                $or: [
                    {name: new RegExp(searchQuery, 'i')},
                    {description: new RegExp(searchQuery, 'i')}
                ]
            });
        }else {
            partners = await Partner.find();
        }
        res.json(partners);
    } catch (err) {
        res.status(500).json({ message: "POOPIE DOOKIE" });
    }
});

// POST route for creating a new partner
router.post('/', async (req, res) => {
    const partner = new Partner({
        name: req.body.name,
        description: req.body.description,
        logoURL: req.body.logoURL,
        active: req.body.active,
    });

    try {
        const newPartner = await partner.save();
        res.status(201).json(newPartner);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE route for deleting an existing partner
router.delete('/:id', async (req, res) => {
    try {
        const result = await Partner.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Cannot find partner' });
        }
        res.json({ message: 'Partner deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


export default router;
