import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Evaluations} from "./evaluations.entity";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 20 })
    code: string;

    @OneToMany(() => Evaluations, (evaluations) => evaluations.lesson)
    evaluations: Evaluations[]
}
