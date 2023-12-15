import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Lesson} from "./entity/lesson.entity";
import {Repository} from "typeorm";
import {CreateLessonDto} from "./dto/create-lesson.dto";
import {SetEvaluationsDto} from "./dto/set-evaluations.dto";
import {Evaluations} from "./entity/evaluations.entity";

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Evaluations) private readonly evaluationsRepository: Repository<Evaluations>,
        @InjectRepository(Lesson) private readonly lessonsRepository: Repository<Lesson>
    ) {}
    async createLesson(dto: CreateLessonDto): Promise<Lesson> {
        const lesson = await this.lessonsRepository.create({ ...dto })
        return this.lessonsRepository.save(lesson)
    }

    async findAllLessons() {
        return this.lessonsRepository.find({

            relations: ['evaluations', 'evaluations.user']
        })
    }

    async setEvaluations(id: string, dto: SetEvaluationsDto) {
        const { user_id, score } = dto
        const evaluations = await this.evaluationsRepository.create({
            ...dto,
            lesson: +id,
            user: user_id
        })
        await this.evaluationsRepository.save(evaluations)
        return { id, user_id, score }
    }
}
