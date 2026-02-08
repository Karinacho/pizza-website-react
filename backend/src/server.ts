import express from 'express';
import authRoutes from './routes/authRoutes.ts';
import userRoutes from './routes/userRoutes.ts';
import pizzaRoutes from './routes/pizzaRoutes.ts';

const app = express();

app.get('/health', (req, res) => {
   res.status(200).json({
       status: 'OK',
       timestamp: new Date().toISOString(),
       service: 'Habit Tracker API'
   })
})

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/pizzas', pizzaRoutes);

export { app }

export default app;