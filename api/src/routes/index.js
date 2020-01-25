import { Router } from 'express';
import logger from '../logger';

const router = Router();

router.get('/', (req, res) => {
  logger.info('Getting /');

  res.send('Success');
});

router.get('/test', (req, res, next) => {
  const { title } = req.query;

  if (title == null || title === '') {
    next(new Error('The "title" parameter is required'));
    return;
  }

  res.send(`${title}`);
});

export default router;
