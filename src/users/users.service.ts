import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/ create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entity/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) {}
    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.usersRepository.create({...dto})
        return this.usersRepository.save(user)
    }

    async findAllUsers() {
        return this.usersRepository.find()
    }
}
