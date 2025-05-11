import express from 'express';
import { config } from 'dotenv'; config();
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});