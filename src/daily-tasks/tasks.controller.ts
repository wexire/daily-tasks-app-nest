import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('daily-tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto) {
		return this.tasksService.createTask(createTaskDto);
	}
}
