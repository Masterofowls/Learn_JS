import { UsersDB as DB } from "./DB.js";
import { v4 as uuid } from "uuid";

export const getAllUsers = (req, res) => {
    try {
      return res.status(200).json(DB.users);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const createUser = (req, res) => {
    try {
      const { name, age, favorite = false } = req.body;
  
      if (!name || age === undefined) {
        return res.status(400).json({ error: "Name and age are required" });
      }
  
      const newUser = {
        id: uuid(),
        name,
        age,
        favorite,
      };
  
      DB.users.unshift(newUser);
  
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const getUser = (req, res) => {
    try {
      const user = DB.users.find(({ id }) => id === req.params.id);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const updateUser = (req, res) => {
    try {
      const userIndex = DB.users.findIndex(({ id }) => id === req.params.id);
  
      if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const updatedUser = {
        ...DB.users[userIndex],
        ...req.body,
        id: DB.users[userIndex].id,
      };
  
      DB.users[userIndex] = updatedUser;
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const deleteUser = (req, res) => {
    try {
      const userIndex = DB.users.findIndex(({ id }) => id === req.params.id);
  
      if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const [deletedUser] = DB.users.splice(userIndex, 1);
  
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };