import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { NewTasksDto, TasksDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  CreateTask(@Body() task: TasksDto) {
    return this.taskService.createTask(task);
  }

  @Get()
  GetAllTask() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  GetTaskById(@Param('id') id: number) {
    return this.taskService.getTaskById(id);
  }

  @Delete(':id')
  DeleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }

  @Patch(':id')
  UpdateTask(@Param('id') id: number, @Body() updatedFields: NewTasksDto) {
    return this.taskService.updateTask(id, updatedFields);
  }
}
