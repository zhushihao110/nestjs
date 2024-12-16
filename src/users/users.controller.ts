import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  create() {
    return this.userService.findAll();
  }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }
  @Post()
  createUser(@Body() createUser: Users): void {
    console.log(createUser);
    if (createUser) {
      this.userService.create(createUser);
    }
  }
}
