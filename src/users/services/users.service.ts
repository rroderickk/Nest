import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dtos';
import { ProductsService } from '../../products/services/products.service';

@Injectable()
export class UsersService {
	constructor(private productsService: ProductsService) {}

	private counterId = 1;
	private user: User[] = [
		{
			id: 1,
			email: 'wtf@gmail.com',
			password: 'hoh234',
			role: 'admin',
		},
	];

	findAll() {
		return this.user;
	}

	findOne(usersEmail: string) {
		console.log(usersEmail);
		const user = this.user.find((e) => e.email === usersEmail);
		if (!user) {
			throw new NotFoundException(`Product #${usersEmail} not found!`);
		}
		return user;
	}

	findById(id: number) {
		console.log(id);
		const userFound = this.user.find((item) => item.id === id);
		if (!userFound) {
			throw new NotFoundException(`Product #${id} not found!`);
		}
		return userFound;
	}

	create(payload: CreateUserDto) {
		console.log(payload);
		this.counterId = this.counterId + 1;
		const newUser = {
			id: this.counterId,
			...payload,
		};
		this.user.push(newUser);
		return newUser;
	}

	update(id: number, payload: UpdateUserDto) {
		const user = this.findById(+id);
		const index = this.user.findIndex((item) => item.id === id);
		if (user) {
			const index = this.user.findIndex((item) => item.id === id);
			return (this.user[index] = {
				...user,
				...payload,
			});
			return this.user[index];
		}
		return null;
	}

	delete(id: number) {
		const index = this.user.findIndex((item: any) => item.id === id);
		const obj = this.user.filter((item: any) => item.id === id);
		if (index === -1) {
			throw new NotFoundException(`User => id: ${id} == Not found!`);
		}
		this.user.splice(index, 1);
		return {
			message: `User => id: ${id}, ${obj[0].email} == Has been deleted!`,
		};
	}

	getOrdersByUser(id: number): Order {
		const user = this.findById(id);
		return {
			date: new Date(),
			user,
			products: this.productsService.findAll(),
		};
	}
}
