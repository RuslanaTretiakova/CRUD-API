import { User } from '../types';

class InMemoryDB {
  private users = new Map<string, User>();

  getAll(): User[] {
    return Array.from(this.users.values());
  }

  get(id: string): User | undefined {
    return this.users.get(id);
  }

  create(user: User): User {
    this.users.set(user.id, user);
    return user;
  }

  update(id: string, patch: Omit<User, 'id'>): User | undefined {
    if (!this.users.has(id)) return undefined;
    const updated: User = { id, ...patch };
    this.users.set(id, updated);
    return updated;
  }

  delete(id: string): boolean {
    return this.users.delete(id);
  }
}

export const db = new InMemoryDB();