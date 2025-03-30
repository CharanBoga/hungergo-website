import express from 'express';
import { addFood, foodList, removeFood, updateFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", foodList);
foodRouter.delete("/remove", removeFood);


export default foodRouter;