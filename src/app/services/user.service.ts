import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private username = null;

  constructor() { }

  getUsername(username: string) {
    return this.username = username;
  }
}
