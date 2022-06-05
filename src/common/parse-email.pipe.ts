import {
	ArgumentMetadata,
	BadRequestException,
	Injectable,
	PipeTransform,
} from '@nestjs/common';
import { UsersService } from '../users/services/users.service';

@Injectable()
export class ParseEmailPipe implements PipeTransform {
	constructor(private usersService: UsersService) {}

	transform(value: string, metadata: ArgumentMetadata) {
		const val = parseInt(value, 10);
		if (isNaN(val)) {
			// throw new BadRequestException(`#${val} is not an numb3r`); //? <- custom error
			// return this.usersService.findOne(value);
			return this.usersService.findOne(value);
		}
		return val;
	}
}
