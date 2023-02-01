import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Question } from './Question';
import { QuestionToCategory } from './QuestionToCategory';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => QuestionToCategory, (questionToCategory) => questionToCategory.category)
  questionToCategories: QuestionToCategory[];
}
