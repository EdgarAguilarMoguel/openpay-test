import express, { Request, Response, Router} from 'express';
import config from '../../config';
import mongoose from 'mongoose';

// var Client = require('../../models/client');
import {PurchaseService} from '../../services/purchaseService';


const router = express.Router();

//CREATE CLIENT (Work in progress)
router.post('/customer/post', function(req: Request , res: Response){

  var clientObj = {
    "name": req.body.name,
    "email": req.body.email,
    "last_name": req.body.last_name,
    "address": {
      "city": req.body.address.city,
      "state": req.body.address.state,
      "line1": req.body.address.line1,
      "line2": req.body.address.line2,
      "postal_code": req.body.address.postal_code,
      "country_code": req.body.address.country_code
    },
    "phone_number": req.body.phone_number
  }

});

//CREATE CHARGE
router.post('/charge/post', function(req: Request, res: Response) {
  var chargeObj: Object = {
    "source_id": req.body.source_id,
    "method": req.body.method,
    "amount": req.body.amount,
    "currency": req.body.currency,
    "description": req.body.description,
    "device_session_id": req.body.device_session_id,
    "customer": req.body.customer,
  }

  var newCharge = new PurchaseService();
  newCharge.charge(chargeObj, () => {res.status(201).send("Cargo realizado")}, (error) => {res.status(error.http_code).send("Cargo fallido")});

})


//DB CONECTION
mongoose.connect(config.host, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Server has been conected to mongodb");
});
module.exports = router;
