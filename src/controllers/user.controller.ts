import { IncomingMessage, ServerResponse } from 'http';
import { db } from '../db/inMemory';
import { sendJSON } from '../utils/http';

export const listUsers = (_: IncomingMessage, res: ServerResponse) => {
  sendJSON(res, 200, db.getAll());
};