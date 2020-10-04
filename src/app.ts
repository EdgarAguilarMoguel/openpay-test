import express, {Application, Request, Response, NextFunction} from 'express';
// const express = require('express');
// import Openpay = require("openpay");
import config from './config'
import bodyParser from 'body-parser';

const app: Application = express();

// import posts = require('./routes/api/posts'); //Change to TS syntax
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/posts', require('./routes/api/posts'));

// const openpay = new Openpay(' your merchant id ', ' your private key ');

// const payment = () => "Pago exitoso"

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send(payment());
// });

// app.post('/customer/post', function(req , res){

//   var newCustomer = {
//     "name":"John",
//     "email":"johndoe@example.com",
//     "last_name":"Doe",
//     "address":{
//       "city":"Queretaro",
//       "state":"Queretaro",
//       "line1":"Calle Morelos no 10",
//       "line2":"col. san pablo",
//       "postal_code":"76000",
//       "country_code":"MX"
//     },
//     "phone_number":"44209087654"
//   };
//   openpay.customers.create(newCustomer, function(error, body) {
//     error;    // null if no error occurred (status code != 200||201||204)
//     body;     // contains the object returned if no error occurred (status code == 200||201||204)
//   });

//   res.status(201).send()
// })

// app.post('/comercialcard/post', function(req,res) {
//   var cardRequest = {
//     'card_number':'4111111111111111',
//     'holder_name':'Juan Perez Ramirez',
//     'expiration_year':'20',
//     'expiration_month':'12',
//     'cvv2':'110',
//  };
//   openpay.customers.cards.create("client_id", cardRequest, function(err,body){
//    err;
//    body;
//   });
//  res.status(201).send()
// })

// app.post('/charging/post', function(req, res){

//   var chargeRequest = {
//     'source_id' : 'card_id',
//     'method' : 'card',
//     'amount' : 100,
//     'currency' : 'MXN',
//     'description' : 'Cargo inicial a mi cuenta',
//     'order_id' : 'oid-00051',
//  }
 
//   openpay.customers.charges.create("client_id", chargeRequest, function(error, charge){
//     error;
//     charge;
//   });

//   res.status(201).send()
// });

// app.post('/payout/post', function(req, res){
//   var payout = {
//     "method": "bank_account",
//     "bank_account":{
//       "clabe":"012298026516924616",
//       "holder_name": "John Doe"
//     },
//     "amount" : 10.50,
//     "description" : "Monthly payment"
//   };
//   openpay.payouts.create(payout, function (error, body){
//     error;
//     body;
//   });
//   res.status(201).send()
// })


app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});


