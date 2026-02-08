import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'user list'})
})

router.get('/:id', (req, res) => {
    res.status(200).json({message: 'user details'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: 'user updated'})
})

router.delete('/:id', (req, res) => {
    res.status(204).json({message: 'user deleted'})
})

export default router;