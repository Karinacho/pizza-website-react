import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'pizza list'})
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `pizza ${id} details`})
})

router.post('/', (req, res) => {
    res.status(201).json({message: 'pizza created'});
})

router.delete('/:id', (req, res) => {
    res.status(204).json({message: 'pizza deleted'});
})

export default router;