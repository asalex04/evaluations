import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {LessonsService} from "./lessons.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {CreateLessonDto} from "./dto/create-lesson.dto";
import {SetEvaluationsDto} from "./dto/set-evaluations.dto";

@Controller('lessons')
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}

    @ApiOperation({ summary: 'Создание занятия' })
    @ApiResponse({ status: 201})
    @Post('/')
    async create(@Body() dto: CreateLessonDto){
        return await this.lessonsService.createLesson(dto)
    }

    @ApiOperation({ summary: 'Получение списка занятий' })
    @ApiResponse({ status: 200})
    @Get('/')
    async findAll(){
        return await this.lessonsService.findAllLessons()
    }

    @ApiOperation({ summary: 'Проставление оценки за занятие' })
    @ApiResponse({ status: 201})
    @Post('/:id/evaluations')
    async setEvaluation(
        @Param('id') id: string,
        @Body() dto: SetEvaluationsDto){
        return await this.lessonsService.setEvaluations(id, dto)
    }
}
