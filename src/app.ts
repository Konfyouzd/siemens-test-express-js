import express from 'express';
import baseRouter from './routes/base';
import metadataRouter from './routes/metadata';

const app = express();
const port = 8081;

// Additional application routes
app.use(baseRouter);
app.use(metadataRouter);

// Start the server
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Siemens Coding Test App listening on port ${port}`);
  /* eslint-enable no-console */
});
