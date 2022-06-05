import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	readonly lastName: string;

	@IsNotEmpty()
	@IsPhoneNumber()
	readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
