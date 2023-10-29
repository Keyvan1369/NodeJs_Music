import express from 'express';
import 'dotenv/config';
import client from './db/db.js';
import musicRoutes from './routers/musicRoutes.js';



const app = express();
const port = 3070 || process.env.PORT;
app.use(express.json());
app.use('/api/music', musicRoutes);
app.get('/',(req, res)=>{
    res.send('Hello World')
});
client.on('connected', () => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
});
















