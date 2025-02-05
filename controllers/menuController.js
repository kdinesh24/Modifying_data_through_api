const MenuItem = require('../models/menuItem');

const createMenuItem = async (req, res) => {
    const { name, description, price } = req.body;
    if (!name || price == null) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    try {
        const newItem = new MenuItem({ name, description, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { createMenuItem, getMenuItems };