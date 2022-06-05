import {
	IsNumber,
	IsBoolean,
	IsString,
	IsUrl,
	IsEmail, //? <- this is a custom validation
	IsDate,
	IsNotEmpty,
	IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateProductDto {
	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	readonly description: string;

	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly price: number;

	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly stock: number;

	@IsNotEmpty()
	@IsUrl()
	readonly image: string;

	@IsNotEmpty()
	@IsBoolean()
	readonly avalible: boolean;
}
export class UpdateProductDto extends PartialType(CreateProductDto) {}
