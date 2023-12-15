import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Lesson} from "./entity/lesson.entity";
import {Evaluations} from "./entity/evaluations.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Evaluations])],
  controllers: [LessonsController],
  providers: [LessonsService]
})
export class LessonsModule {}
