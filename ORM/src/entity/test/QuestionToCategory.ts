import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { Question } from './Question';

@Entity()
export class QuestionToCategory {
  @PrimaryGeneratedColumn()
  public postToCategoryId: number;

  @Column()
  public postId: number;

  @Column()
  public categoryId: number;

  @Column()
  public order: number;

  @ManyToOne(() => Question, (question) => question.questionToCategory)
  public question: Question;

  @ManyToOne(() => Category, (category) => category.questionToCategories)
  public category: Category;
}
