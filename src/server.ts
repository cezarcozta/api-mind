import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';

import './container';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
// app.use('/files', express.static());
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 3333');
});
