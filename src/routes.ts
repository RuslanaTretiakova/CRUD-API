import { IncomingMessage, ServerResponse } from 'http';
import { listUsers } from './controllers/user.controller';

export const router = (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  const [_, api, resource, id] = url.pathname.split('/');

  if (api !== 'api' || resource !== 'users') {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Route not found' }));
    return;
  }

  if (req.method === 'GET' && !id) return listUsers(req, res);

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Route not found' }));
};