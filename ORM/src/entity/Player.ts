import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Team } from './Team';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  nationality: string;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
