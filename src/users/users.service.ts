import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }
  async create(createUserDto: Users): Promise<Users> {
    return this.usersRepository.save(createUserDto);
  }
}
