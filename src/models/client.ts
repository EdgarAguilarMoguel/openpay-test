import mongoose, {Schema} from 'mongoose';
import {IClient} from '../interfaces/IClient'


const Client = new Schema({ 
  _id: Schema.Types.ObjectId,
  name: String, 
  email: String,
  last_name: String,
  address: {
    city: String,
    state: String,
    line1: String,
    line2: String,
    postal_code: String,
    country_code: String
  },
  phone_number: Number
});


module.exports = mongoose.model<IClient & mongoose.Document>('Client', Client);