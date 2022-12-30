import { FirebaseAuthGuard } from '@app/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createOrder(@Body() request: CreateUserRequest) {
    return this.userService.createUser(request);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @UseGuards(FirebaseAuthGuard)
  @Post('/login')
  async userLogin(@Req() req) {
    try {
      const user = this.userService.userLogin(req.user);
      return user;
    } catch (err) {}
  }

  @UseGuards(FirebaseAuthGuard)
  @Get('/protected')
  async protected(@Req() req) {
    return req.user;
  }
}
