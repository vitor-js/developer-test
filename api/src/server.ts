import express from 'express';
import cors from 'cors';
import {routes} from './routes'

const app = express();
app.use(cors());
app.use(express.json());

routes(app)

app.listen(8000, () => {
  console.log('🚀 Server started on port 8000!');
});
