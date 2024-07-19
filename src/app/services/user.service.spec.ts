import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with 3 users', () => {
    const users = service.getUsers();
    expect(users.length).toBe(3);
  });

  it('should add a new user', () => {
    const user = { id: 4, name: 'Alice', workouts: [{ type: 'Running', minutes: 30 }] };
    service.addUser(user);
    const users = service.getUsers();
    expect(users.length).toBe(4);
    expect(users.find(u => u.id === 4)).toBeDefined();
  });
});
