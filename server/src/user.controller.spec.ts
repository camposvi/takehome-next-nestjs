import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../src/users/controller/users.controller';
import { UsersService } from '../src/users/service/users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUsersService = {
    create: jest.fn().mockResolvedValue({
      id: 1,
      name: 'German Cano',
      email: 'gcano@flu.com',
    }),
    findOne: jest.fn().mockResolvedValue({
      id: 1,
      name: 'Vinicius C',
      email: 'vcamposr@gmail.com',
    }),
    findAll: jest.fn().mockResolvedValue([
      { id: 1, name: 'Vinicius C', email: 'vcamposr@gmail.com' },
      { id: 2, name: 'Bruno silva', email: 'bsilva@ig.com' },
    ]),
    update: jest.fn().mockResolvedValue({
      id: 1,
      name: 'Jhon Arias',
      email: 'jhonarias@co.com',
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
      name: 'German Cano',
      email: 'gcano@flu.com',
      password: '123456',
    };
    const result = await controller.create(dto);
    expect(result).toEqual({
      id: 1,
      name: 'German Cano',
      email: 'gcano@flu.com',
    });
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find one user by ID', async () => {
    const id = '1';
    const result = await controller.findOne(id);
    expect(result).toEqual({
      id: 1,
      name: 'Vinicius C',
      email: 'vcamposr@gmail.com',
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
      name: 'Paulo Henrique',
      email: 'phenrique@example.com',
      password: '123456',
    };
    const id = '1';
    const result = await controller.update(id, dto);
    expect(result).toEqual({
      id: 1,
      name: 'Jhon Arias',
      email: 'jhonarias@co.com',
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
