import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(request: CreateUserRequest) {
    return await this.userRepository.create(request);
  }

  async getAllUsers() {
    return await this.userRepository.find({});
  }

  async getById(userId) {
    return await this.userRepository.find({
      _id: userId,
    });
  }

  async userLogin({ email }) {
    const user = await this.userRepository.findOne({
      email,
    });
    return user;
  }
}
