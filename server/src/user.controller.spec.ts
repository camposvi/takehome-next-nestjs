// test/users.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../src/users/controller/users.controller';
import { UsersService } from '../src/users/service/users.service';
import { hashPassword } from '../src/utils/bcrypt';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUsersService = {
    create: jest.fn().mockResolvedValue({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    }),
    findOne: jest.fn().mockResolvedValue({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    }),
    findAll: jest.fn().mockResolvedValue([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ]),
    update: jest.fn().mockResolvedValue({
      id: 1,
      name: 'Updated Name',
      email: 'updated@example.com',
    }),
    remove: jest.fn().mockResolvedValue({}),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should create a user', async () => {
    const dto = {
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
    };
    const result = await controller.create(dto);
    expect(result).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    });
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find one user by ID', async () => {
    const id = '1';
    const result = await controller.findOne(id);
    expect(result).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    });
    expect(service.findOne).toHaveBeenCalledWith('1');
  });

  it('should list all users', async () => {
    const result = await controller.findAll();
    expect(result).toHaveLength(2);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should update a user', async () => {
    const dto = {
      name: 'Updated Name',
      email: 'updated@example.com',
      password: '123456',
    };
    const id = '1';
    const result = await controller.update(id, dto);
    expect(result).toEqual({
      id: 1,
      name: 'Updated Name',
      email: 'updated@example.com',
    });
    expect(service.update).toHaveBeenCalledWith('1', dto);
  });

  it('should delete a user', async () => {
    const id = '1';
    const result = await controller.remove(id);
    expect(result).toEqual({});
    expect(service.remove).toHaveBeenCalledWith('1');
  });
});
