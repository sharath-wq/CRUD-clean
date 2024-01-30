import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
});

const productModel = mongoose.model('Product', ProductSchema);
export default productModel;
