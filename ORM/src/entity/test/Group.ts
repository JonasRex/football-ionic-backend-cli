import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Person } from './Person';
import { GroupType } from './GroupType';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  something: string;

  @ManyToOne(() => Person, (person) => person.group, { cascade: ['insert', 'update'] })
  @JoinColumn({
    name: 'leader_fk',
    referencedColumnName: 'id',
  })
  public leader: Person;

  @ManyToOne(() => Person, (person) => person.group, { cascade: ['insert', 'update'] })
  @JoinColumn({
    name: 'worker_fk',
    referencedColumnName: 'id',
  })
  public worker: Person;

  @ManyToOne(() => GroupType, { nullable: true })
  @JoinColumn({
    name: 'group_fk',
    referencedColumnName: 'id',
  })
  group_type_fk: GroupType;
}
