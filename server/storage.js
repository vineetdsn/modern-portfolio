import { randomUUID } from "crypto";

export class MemStorage {
  constructor() {
    this.contactMessages = new Map();
  }
creating async
  async createContactMessage(message) {
    const id = randomUUID();
    const messageWithId = { ...message, id };
    this.contactMessages.set(id, messageWithId);
    return messageWithId;
  }

  async getContactMessages() {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
It does look fun. What else happens in the show?