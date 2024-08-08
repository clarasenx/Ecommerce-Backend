import 'dotenv/config';
import express from 'express';
import pool from './db.js';

const app = express();

app.get('/', async (req, res) => {
  const result = (await pool.query('SELECT * FROM users')).rows;
  res.status(200).send(result)
})

app.listen(4000, () => console.log('API rodando com sucesso!'))