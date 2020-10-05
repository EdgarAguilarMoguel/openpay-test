import mongoose, {Schema} from 'mongoose';
import {ICardRequest} from '../interfaces/ICardRequest'


const CardRequest = new Schema({ 
  card_number: String,
  holder_name: String,
  expiration_year: String,
  expiration_month: String
});

module.exports = mongoose.model<ICardRequest & mongoose.Document>('CardRequest', CardRequest);
