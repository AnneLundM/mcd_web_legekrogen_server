import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const orderSchema = new Schema({
    
  products: { type: Array, default: [] },
  email: { type: String, default: "" },
  created : { type : Date, default: new Date() }

});

export default mongoose.models.order || mongoose.model('order', orderSchema);
