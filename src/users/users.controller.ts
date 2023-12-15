import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "./dto/ create-user.dto";

@ApiTags()
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: 'Создание пользователя' })
    @ApiResponse({ status: 201})
    @Post('/')
    async create(@Body() dto: CreateUserDto){
        return await this.usersService.createUser(dto)
    }

    @ApiOperation({ summary: 'Получение списка пользователей' })
    @ApiResponse({ status: 200})
    @Get('/')
    async findAll(){
        return await this.usersService.findAllUsers()
    }
}
