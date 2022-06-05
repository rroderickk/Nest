import {
	Controller,
	Get,
	Param,
	Post,
	Put,
	Body,
	Delete,
	ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dtos';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Get('/usersFilter')
	getUsersFilter(@Param('usersFilter') usersFilter: string) {
		return `this it's a usersFiltro`; //todo escribir codigo para filtrar
	}

	@Get()
	findAll() {
		return this.usersService.findAll();
	}

	@Get(':id')
	get(@Param('id', ParseIntPipe) id: string) {
		return this.usersService.findOne(id);
	}

	@Get(':id/orders')
	getOrders(@Param('id', ParseIntPipe) id: number) {
		return this.usersService.getOrdersByUser(id);
	}

	@Get(':usersEmail')
	getUsersId(@Param('usersEmail') usersEmail: string) {
		return this.usersService.findOne(usersEmail);
	}

	@Post()
	create(@Body() payload: CreateUserDto) {
		return this.usersService.create(payload);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() payload: UpdateUserDto) {
		return this.usersService.update(+id, payload);
	}

	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.usersService.delete(+id);
	}
}
