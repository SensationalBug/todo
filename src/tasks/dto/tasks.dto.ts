export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class TasksDto {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export class NewTasksDto {
  title?: string;
  description?: string;
}
