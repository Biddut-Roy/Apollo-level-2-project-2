import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('server testing Working');
});

// application routes
app.use('/inventory/v1/', ProductRoutes);

app.use('/inventory/order/v1/', OrderRoutes);

//route not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
