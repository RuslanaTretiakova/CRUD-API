import { IncomingMessage, ServerResponse } from 'http';

export const router = (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  const [_, api, resource] = url.pathname.split('/');
  
  if (api !== 'api' || resource !== 'users') {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Route not found' }));
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify([]));
};
