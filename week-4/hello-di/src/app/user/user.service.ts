import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  getUser(): User {
    return new User(0, 'Matthew', 'Howard', '4837 Beryl Oak Dr., Colorado Springs, CO 80920');
  }
}
