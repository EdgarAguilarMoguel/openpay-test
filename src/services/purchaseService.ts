import Openpay = require("openpay");
const openpay = new Openpay(' your merchant id ', ' your private key ');

var Charge = require('../models/charge');


export class PurchaseService {
  
  public charge(chargeBody: Object, onSuccessCallback, onFailCallback) {

    openpay.charges.create(chargeBody, function(error, body) {

      if (error) {
        onFailCallback(error);
        return;
      }

      var newCharge = new Charge(chargeBody);
      newCharge.save((err, charge) => {

        if (err) {
          onFailCallback(err);
          return;
        } 

      })

      onSuccessCallback(body);

    });

  }

}
