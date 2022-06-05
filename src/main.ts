import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * We're creating a new NestJS application, and we're telling it to use the ValidationPipe for all
 * incoming requests.
 * @AppModule is the entry point.
 */
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	///// !┌─┐┌─┐┌┬┐┬┬  ┬┌─┐┌┬┐┌─┐ ╔═╗┬╔═╗╔═╗
	///// !├─┤│   │ │└┐┌┘├─┤ │ ├┤  ╠═╝│╠═╝║╣
	///// !┴ ┴└─┘ ┴ ┴ └┘ ┴ ┴ ┴ └─┘ ╩  ┴╩  ╚═╝
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
		}),
	);
	await app.listen(4444);
}

bootstrap();
