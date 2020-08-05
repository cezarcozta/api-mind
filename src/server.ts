import express from 'express';

import './database';

const app = express();

app.use(express.json());

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 3333');
});
