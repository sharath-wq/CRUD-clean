import express from 'express';
import morgan from 'morgan';

const server = express();
server.use(express.json());
server.use(morgan('tiny'));

export default server;
