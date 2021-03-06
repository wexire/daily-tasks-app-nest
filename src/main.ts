import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: '*',
		methods: 'GET, PUT, POST, DELETE',
		allowedHeaders: 'Content-Type, Authorization'
	});
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3001);
}
bootstrap();
