import mongoose from 'mongoose';
import { DB } from './config';
mongoose.Promise = global.Promise;
mongoose.connect(process.env.NODE_ENV !== 'test' ? DB : 'mongodb://localhost:27017/optimal_test', {
  useMongoClient: true
});

mongoose.connection
  .once('open', async () => {
    console.info('Connected!');
  })
  .on('error', err => {
    console.info('Error DB connection', err.message);
  });
