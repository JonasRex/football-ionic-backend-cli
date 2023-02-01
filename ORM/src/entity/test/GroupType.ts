import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GroupType {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  name: string;
}
