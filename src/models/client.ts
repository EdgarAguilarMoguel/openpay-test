import mongoose, {Schema} from 'mongoose';
import {IClient} from '../interfaces/IClient'


const Client = new Schema({ 
  name: {
    type: String,
    required: [true, 'Please enter a full name'],
    index: true,
  }, 
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    index: true,
  },
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