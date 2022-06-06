import { Injectable, Inject } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
	constructor(
		@Inject('API_KEY') private apiKey: string,
		private config: ConfigService,
	) {}

	getHello(): string {
		const apiKey = this.config.get<string>('API_KEY');
		const db = this.config.get('DATABASE_NAME');
		return `
		<h1 style="font-size: 40px; color: crimson;">
			Hello World! ${apiKey} -> ${db} <-
		</h1>`;
	}
}
