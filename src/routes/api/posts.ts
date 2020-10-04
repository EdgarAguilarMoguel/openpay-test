import express, { Request, Response, Router} from 'express';
import config from '../../config';
import mongoose from 'mongoose';


const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Pago exitoso.");
});

mongoose.connect(config.host, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("awebo prro")
});
module.exports = router;
