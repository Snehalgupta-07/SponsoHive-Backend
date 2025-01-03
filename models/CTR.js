const mongoose = require('mongoose');

const CTRSchema = new mongoose.Schema({
    campaignId: { type: String, required: true, index: true }, 
    recipientId: { type: String, required: true },
    trackingurls: [{ type: String }],
    clicks: [{ type: Number, default: 0 }],
    timestamp: { type: Date, default: null }
});


module.exports = mongoose.model('CTRcalculation', CTRSchema);
