import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { LessonsModule } from './lessons/lessons.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/entity/user.entity";
import {Lesson} from "./lessons/entity/lesson.entity";
import {Evaluations} from "./lessons/entity/evaluations.entity";

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          password: 'root',
          username: 'postgres',
          entities: [User, Lesson, Evaluations],
          database: 'lessons',
          synchronize: true,
          logging: true,
      }),
      UsersModule,
      LessonsModule,
  ],
})
export class AppModule {}
