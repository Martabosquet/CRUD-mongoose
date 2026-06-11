import { Fighter } from '../models/fighters.js';

const getAllFightersService = async () => {
  return await Fighter.find();
};

const getFighterByIdService = async (id) => {
  return await Fighter.findById(id);
};

const createFighterService = async (fighterData) => {
  const newFighter = new Fighter(fighterData);
  return await newFighter.save();
};

const updateFighterService = async (id, fighterData) => {
  // { new: true } devuelve el objeto ya modificado en lugar del antiguo
  return await Fighter.findByIdAndUpdate(id, fighterData, { new: true, runValidators: true });
};

const deleteFighterService = async (id) => {
  return await Fighter.findByIdAndDelete(id);
};

export const fighterService = {
  getAllFightersService,
  getFighterByIdService,
  createFighterService,
  updateFighterService,
  deleteFighterService
};