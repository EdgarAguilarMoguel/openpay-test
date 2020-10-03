import express, { Request, Response, Router} from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Pago exitoso.");
});

module.exports = router;
