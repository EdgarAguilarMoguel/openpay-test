import express, { Request, Response, Router} from 'express';
import config from '../../config';
import mongoose from 'mongoose';
import Openpay = require("openpay");

var Client = require('../../models/client');
var Charge = require('../../models/charge');

const openpay = new Openpay(' your merchant id ', ' your private key ');

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Pago exitoso.");
});


//CREATE CLIENT
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

  var newClient = new Client(clientObj);
  newClient.save((err, client) => {
    if (err) {
      res.status(400).send("There is an error while adding new client.");
    } else {
      res.status(200).json(client);
    }
  });

  // openpay.customers.create(newCustomer, function(error, body) {
  //   error;    // null if no error occurred (status code != 200||201||204)
  //   body;     // contains the object returned if no error occurred (status code == 200||201||204)
  // });

});

//CREATE CHARGE
router.post('/charge/post', function(req: Request, res: Response) {
  var chargeObj = {
    "source_id": req.body.source_id,
    "method": req.body.method,
    "amount": req.body.amount,
    "currency": req.body.currency,
    "description": req.body.description,
    "device_session_id": req.body.device_session_id
  }

  var newCharge = new Charge(chargeObj);
  newCharge.save((err, charge) => {
    if (err) {
      res.status(400).send("There is an error while creating new charge.");
    } else {
      res.status(200).json(charge);
    }
  })

  openpay.customers.create(newCharge, function(error, body) {
        error;    // null if no error occurred (status code != 200||201||204)
        body;     // contains the object returned if no error occurred (status code == 200||201||204)
  });

})


//DB CONECTION
mongoose.connect(config.host, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("awebo prro")
});
module.exports = router;
