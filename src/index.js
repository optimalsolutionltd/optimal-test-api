import path from 'path';
import fs from 'fs';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import { PORT } from './config/config';
import './config/db';

const app = express();
const server = http.Server(app);


app.use(cors());
// morgan is just a logger to log responses in the console.
app.use(morgan('combined'));
// helmet is a package to add some security headers to the responses.
app.use(helmet());

// serve static files (images...) from public folder.
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json({ limit: '4mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));
app.use('/', routes);

const actualPort = process.env.NODE_ENV !== 'test' ? PORT : 3030;

server.listen(actualPort, () => {
  console.info(`API listen on port ${actualPort}`);
});

export default app;
