import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDTO } from '../dto/create-user-dto';
import { UpdateUserDTO } from '../dto/update-user-dto';
<<<<<<< HEAD

=======
import { hashPassword } from '../../utils/bcrypt';
>>>>>>> server-development
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

<<<<<<< HEAD
  create(createUserDto: CreateUserDTO): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
=======
  async create(createUserDto: CreateUserDTO): Promise<User> {
    const hashedPassword = await hashPassword(createUserDto.password);
    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
>>>>>>> server-development
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id: Number(id) },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

<<<<<<< HEAD
  async update(id: string, updateUserDTO: UpdateUserDTO): Promise<User> {
=======
  async update(
    id: string,
    updateUserDTO: Partial<UpdateUserDTO>,
  ): Promise<User> {
    if (updateUserDTO.password) {
      updateUserDTO.password = await hashPassword(updateUserDTO.password);
    }
>>>>>>> server-development
    await this.usersRepository.update(id, updateUserDTO);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
