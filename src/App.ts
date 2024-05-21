import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send(res);
});

// application routes
app.use('/inventory/v1/', ProductRoutes);

export default app;
