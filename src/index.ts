import express = require('express');
import routerResize from './routes/resizingRouter';
const app = express();
const port = 4000;
app.use('/resizing', routerResize);
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'Welcome,To use image resizer please add /resizing/?name=&height=&width= to the url'
  );
});
app.listen(port, (): void => {
  console.log('server running');
});
export default app;
