import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  changeFavorite,
} from "./controller.js";

export const userRouter = express.Router();

userRouter.route("/")
  .get(getAllUsers)
  .post(createUser);

userRouter.route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)
  .patch(changeFavorite);