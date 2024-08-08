import { Router } from 'express';
import BaseRepository from '../repository/BaseRepository.js'

const router = Router();

router.get("/", async (req, res) => {
  const result = await new BaseRepository().getAll("users");
  res.status(200).send(result);
});

export default router;