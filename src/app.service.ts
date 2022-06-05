import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return '<h1 style="font-size: 40px; color: crimson;"> Hello World! </h1>';
	}
}
