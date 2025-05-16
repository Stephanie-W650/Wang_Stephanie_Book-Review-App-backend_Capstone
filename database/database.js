import { config } from 'dotenv'; config();
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
// event listener function to confirm the connection if successfully
mongoose.connection.once('open', () => {
    console.log(`Connected to ${mongoose.connection.name}`)
});

