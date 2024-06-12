import mongoose from 'mongoose';
import act from 'react';
const schema = mongoose.Schema;

const partnerSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    logoURL: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;
