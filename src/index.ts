import 'dotenv/config';
import http from 'http';
import { router } from './routes';

const PORT = Number(process.env.PORT || 4000);

const server = http.createServer((req, res) => {
  try {
    router(req, res);
  } catch (e: any) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: e?.message || 'Server error' }));
  }
});

server.on('clientError', (_err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}/api/users`),
);
