import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Group } from './Group';

@Entity()
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Group, (group) => group.leader || group.worker)
  group: Group[];
}
