import app from './app.js';
import dotenv from 'dotenv';
import { connectToDB } from './db/connection.js';
dotenv.config();
const PORT = process.env.PORT || 5000;
connectToDB().then(() => {
    app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });
}).catch((err) => { console.log(err); });
//MongoDB->New Project->create cluster->create deployment->create user->connect->createdb
//# sourceMappingURL=index.js.map