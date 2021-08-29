import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
	async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
		const { title } = createTaskDto;
		const task = this.create({
			title
		});

		await this.save(task);
		return task;
	}

	async getTasks(): Promise<Task[]> {
		const query = this.createQueryBuilder('task');
		const tasks = await query.getMany();
		return tasks;
	}
}
