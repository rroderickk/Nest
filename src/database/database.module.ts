import { Module, Global } from '@nestjs/common';

const API_KEY = '134134123';
const API_KEY_PROD = 'PROD1341234';

@Global()
@Module({
	providers: [
		{
			provide: 'DATABASE_CONNECTION',
			useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
		},
	],
	exports: ['API_KEY'],
})
export class DatabaseModule {}
