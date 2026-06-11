import {fighterService} from '../services/fighters.js';

const getAllFighters = async (req, res) => {
  try {
    const fighters = await fighterService.getAllFightersService();
    res.status(200).json(fighters);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los luchadores', error: error.message });
  }
};

const getFighterById = async (req, res) => {
  try {
    const { id } = req.params;
    const fighter = await fighterService.getFighterByIdService(id);
    
    if (!fighter) {
      return res.status(404).json({ message: `Luchador con ID ${id} no encontrado` });
    }
    
    res.status(200).json(fighter);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el luchador', error: error.message });
  }
};

const createFighter = async (req, res) => {
  try {
    const newFighter = await fighterService.createFighterService(req.body);
    res.status(201).json(newFighter);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el luchador', error: error.message });
  }
};

const updateFighter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFighter = await fighterService.updateFighterService(id, req.body);
    
    if (!updatedFighter) {
      return res.status(404).json({ message: `No se pudo actualizar. Luchador no encontrado` });
    }
    
    res.status(200).json(updatedFighter);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el luchador', error: error.message });
  }
};

const deleteFighter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFighter = await fighterService.deleteFighterService(id);
    
    if (!deletedFighter) {
      return res.status(404).json({ message: `No se pudo eliminar. Luchador no encontrado` });
    }
    
    res.status(200).json({ message: 'Luchador eliminado correctamente', fighter: deletedFighter });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el luchador', error: error.message });
  }
};

export const fightersController = {
  getAllFighters,
  getFighterById,
  createFighter,
  updateFighter,
  deleteFighter
};