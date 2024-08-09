import { Router } from "express";
import ProductRepository from "../repository/ProductRepository.js";

const router = Router();

router.get("/", async (req, res) => {
  const result = await new ProductRepository().getAll("product");
  res.status(200).send(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const columnsArray = ["id", "name", "price_in_cents", "size"];
  const result = await new ProductRepository().getById("products", columnsArray, id);
  res.status(200).send(result);
});

router.post("/", async (req, res) => {
  const { body } = req;
  const columnsArray = ["name", "price_in_cents", "size"];
  const valuesArray = columnsArray.reduce((acc, columnName) => {
    acc.push(body[columnName]);
    return acc;
  }, []);

  await new ProductRepository().insertOne(valuesArray);
  res.status(200).send();
});

export default router;
