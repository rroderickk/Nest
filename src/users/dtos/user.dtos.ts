import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	readonly email: string;

	@IsNotEmpty()
	@IsString()
	@Length(6)
	readonly password: string;

	@IsNotEmpty()
	@IsString()
	readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
