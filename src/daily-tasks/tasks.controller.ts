import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Post('/new')
	createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
		return this.tasksService.createTask(createTaskDto);
	}

	@Get('/get')
	getTasks(): Promise<Task[]> {
		return this.tasksService.getTasks();
	}

	@Delete('/delete')
	deleteTasks(@Body() createTasksDto: CreateTaskDto): Promise<void> {
		return this.tasksService.deleteTask(createTasksDto);
	}
}
