import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { QuestionToCategory } from './QuestionToCategory';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @OneToMany(() => QuestionToCategory, (questionToCategory) => questionToCategory.question)
  questionToCategory: QuestionToCategory[];
}
