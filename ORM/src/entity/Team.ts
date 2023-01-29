import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './Player';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  year_founded: number;

  @OneToMany(() => Player, (player) => player.team, { cascade: true })
  players: Player[];
}
