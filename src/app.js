import express from 'express';
import photosRoutes from './routes/photos.routes.js';
import userRoutes from './routes/users.routes.js';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/photos', photosRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

