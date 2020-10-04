import mongoose, {Schema} from 'mongoose';
import {IPayout} from '../interfaces/IPayout'


const Payout = new Schema({ 
  method: String,
  destination_id: String,
  amount: Number,
  description: String,
  order_id: String
});

module.exports = mongoose.model<IPayout & mongoose.Document>('Payout', Payout);
