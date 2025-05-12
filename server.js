import express from 'express';
import { config } from 'dotenv'; config();
import cors from 'cors';
import usersRouter from './routes/users/users-router.js';
import postRouter from './routes/posts/posts-router.js'
import commentRouter from './routes/comments/comments-router.js'
import './database/database.js'


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});