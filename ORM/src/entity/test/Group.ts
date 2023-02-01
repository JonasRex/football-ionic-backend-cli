import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './Person';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  something: string;

  @ManyToOne(() => Person, (person) => person.group)
  public leader: Person;

  @ManyToOne(() => Person, (person) => person.group)
  public worker: Person;
}
