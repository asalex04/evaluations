import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "../../users/entity/user.entity";
import {Lesson} from "./lesson.entity";

@Entity()
export class Evaluations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    score: number;

    @CreateDateColumn({select: false})
    createdAt: Date;

    @ManyToOne(() => User, user => user.evaluations)
    @JoinColumn({ name: 'user_id'})
    user: number

    @ManyToOne(() => Lesson, lesson => lesson.evaluations)
    @JoinColumn({ name: 'lesson_id' })
    lesson: number
}
