import dotenv from 'dotenv';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import express from 'express'
import createServer from './createServer';

dotenv.config();
const app = express();

const server = createServer;

app.use(bodyParser.urlencoded({ extended: false })); // added to get payhere notify url data
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use('/graphql', createServer)

const port = process.env.APP_PORT || 4000

app.listen(port, () => {
  console.log(`🚀 Server is now running on port http://localhost:${port}/graphql`);
})