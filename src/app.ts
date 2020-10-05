import express, {Application} from 'express';
import config from './config'
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Application = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use('/api/posts', require('./routes/api/posts'));

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});


