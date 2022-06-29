import express from 'express';
import cors from 'cors';
import router from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on http://localhost:${listener.address().port}`);
});
