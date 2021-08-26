import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
	@PrimaryColumn() title: string;
}
