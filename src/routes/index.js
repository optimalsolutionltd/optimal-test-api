import express from 'express';
import info from '../../package';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ api: info.name, version: info.version });
});


export default router;
