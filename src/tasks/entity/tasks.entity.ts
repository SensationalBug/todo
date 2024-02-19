import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../dto/tasks.dto';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: TaskStatus.PENDING })
  status: TaskStatus;
}
