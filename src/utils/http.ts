import { ServerResponse } from 'http';

export const sendJSON = (res: ServerResponse, status: number, payload: unknown) => {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
};

export const sendText = (res: ServerResponse, status: number, message: string) =>
  sendJSON(res, status, { message });