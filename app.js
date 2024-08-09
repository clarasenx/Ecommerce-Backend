import "dotenv/config";
import express from "express";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(4000, () => console.log("API rodando com sucesso!"));
