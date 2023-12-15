import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Evaluations} from "../../lessons/entity/evaluations.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 30 })
    email: string;

    @OneToMany(() => Evaluations, (evaluations) => evaluations.user)
    evaluations: Evaluations[]
}
