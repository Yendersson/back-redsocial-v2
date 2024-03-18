import express from 'express'
import http from 'http';
import { CommonRoutesConfig } from './src/routes/common.routes.config';
import { UserRoutes } from './src/routes/user.routes';
import { PostRoutes } from './src/routes/post.routes';
import connectDB from './connectDB';
import { AuthRoutes } from './src/routes/auth.routes';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 8080;
const routes: Array<CommonRoutesConfig> = [];

app.use(express.json());

routes.push(new UserRoutes(app));
routes.push(new PostRoutes(app));
routes.push(new AuthRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
})

connectDB.connect();

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
         //debugLog(`Routes configured for ${route.getName()}`);
        console.log(`Routes configured for ${route.getName()}`);
    });

    console.log(runningMessage);
})