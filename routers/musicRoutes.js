import express from 'express';
import Music from '../models/music.js';

const musicRoutes = express.Router();

musicRoutes.post("/", async (req, res) => {

    try {
        const {title, description, image} = req.body;
        const response = await Music.create({title, description, image});
        res.status(201).json(response)
    } catch(err){
        res.status(400).json({ error: 'bad request' });
    }
})
musicRoutes.get("/", async (req, res) => {
    try {
        const response = await Music.find();
        res.status(201).json(response);
    } catch(err){
        res.status(400).json({ error: "bad request" });
    }
})
musicRoutes.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const response = await Music.findById(id);
          if (!response) {
            res.status(404).json({ error: "not found" });
            return;
        }
        res.status(201).json(response);
        console.log(response);
       
        
    } catch(err){
        res.status(404).json({ error: "not found" });
    }
})
export default musicRoutes;