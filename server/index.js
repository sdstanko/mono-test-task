import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import cors from 'cors';

const app = express();
const PORT = config.get('serverPort') || 4000;
app.use(cors());
app.use(express.json());

const start = async () => {
    try {
        mongoose.connect(config.get('dbUrl'));
        app.listen(PORT, () => console.log('app started on port ' + PORT));
    } catch (e) {}
};

start();
