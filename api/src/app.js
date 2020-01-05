import bodyParser from 'body-parser';
import express from 'express';
import expressPino from 'express-pino-logger';
import logger from './logger';
import router from './routes';

const app = express();
const expressLogger = expressPino({ logger });

app.use(expressLogger);
app.use(bodyParser.json());

// Routes
app.use('/', router);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .json({
      error: err.name,
      message: err.message,
    });
});

export default app;
