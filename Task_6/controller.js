import { UsersDB as DB } from "./DB.js";
import { userCreateScheme, userUpdateScheme } from "./validators.js";

export const getAllUsers = async (req, res) => {
  try {
    const page   = Math.max(1, Number(req.query.page) || 1);
    const limit  = Math.min(100, Math.max(1, Number(req.query.limit) || 5));
    const search = String(req.query.search || '').trim();

    const result = await DB.getPage({ search, page, limit });
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    try {
      await userCreateScheme.validate(userData, { abortEarly: false });
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }

    const newUser = await DB.create(userData);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await DB.getById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    await userUpdateScheme.validate(req.body, { abortEarly: false });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
  try {
    const updated = await DB.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await DB.remove(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(deleted);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const changeFavorite = async (req, res) => {
  try {
    const current = await DB.getById(req.params.id);
    if (!current) {
      return res.status(404).json({ error: "User not found" });
    }

    const updated = await DB.update(req.params.id, { favorite: !current.favorite });
    return res.status(200).json({ favorite: updated.favorite });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};