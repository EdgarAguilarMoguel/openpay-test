import mongoose, {Schema} from 'mongoose';
import {ICharge} from '../interfaces/ICharge'


const Charge = new Schema({ 
  source_id: String,
  method: String,
  amount: Number,
  currency: String,
  description: String,
  device_session_id: String,
});

module.exports = mongoose.model<ICharge & mongoose.Document>('Charge', Charge);
