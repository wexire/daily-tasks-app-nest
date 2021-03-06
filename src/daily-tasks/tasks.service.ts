import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
	constructor(@InjectRepository(TasksRepository) private tasksRepository: TasksRepository) {}

	createTask(createTaskDto: CreateTaskDto): Promise<Task> {
		return this.tasksRepository.createTask(createTaskDto);
	}

	getTasks(): Promise<Task[]> {
		return this.tasksRepository.getTasks();
	}

	async deleteTask(createTaskDto: CreateTaskDto): Promise<void> {
		await this.tasksRepository.remove(createTaskDto);
	}
}
