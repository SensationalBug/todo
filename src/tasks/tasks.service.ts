import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/tasks.entity';
import { Repository } from 'typeorm';
import { NewTasksDto, TasksDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  createTask(task: TasksDto) {
    return this.tasksRepository.save(task);
  }

  getAllTasks() {
    return this.tasksRepository.find();
  }

  getTaskById(id: number) {
    return this.tasksRepository.findOneBy({ id: id });
  }

  async deleteTask(id: number) {
    const task = await this.getTaskById(id);
    return this.tasksRepository.delete(task);
  }

  async updateTask(id: number, updatedField: NewTasksDto) {
    const task = await this.getTaskById(id);
    const res = task ? this.tasksRepository.update(id, updatedField) : task;
    return res;
  }
}
