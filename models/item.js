const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  itemType: {
    type: String,
    enum: ['Helmet', 'Amulet', 'Ring', 'Chest', 'Pants', 'Boots', 'Gloves', '1H Weapon', '2H Weapon', 'Offhand', 'Shield'],
    required: true
  },
  affixes: [String],
  itemPower: Number,
  postedBy: String, //this will be the Discord user id
});

module.exports = mongoose.model('Item', itemSchema);
