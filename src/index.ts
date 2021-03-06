import * as dotenv from 'dotenv';
dotenv.config();

import {initServer} from "./app/app.server";

const port:number = +process.env.PORT;
initServer(port);