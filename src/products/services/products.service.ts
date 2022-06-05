import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../Entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/product.dtos';

@Injectable()
export class ProductsService {
	private counterId = 1;
	private products: Product[] = [
		{
			id: 1,
			name: `Produc 1`,
			description: `Ice_cream`,
			price: 20,
			stock: 200,
			image: ``,
			avalible: true,
		},
	];

	findAll() {
		return this.products;
	}

	findOne(id: number) {
		const products = this.products.find((item) => item.id === id);
		if (!products) {
			throw new NotFoundException(`Product #${id} not found!`);
		}
		return products;
	}

	create(payload: CreateProductDto) {
		console.log(payload);
		this.counterId = this.counterId + 1;
		const newProduct = {
			id: this.counterId,
			...payload,
		};
		this.products.push(newProduct);
		return newProduct;
	}

	update(id: number, payload: UpdateProductDto) {
		const product = this.findOne(id);
		const index = this.products.findIndex((item) => item.id === id);
		this.products[index] = {
			...product,
			...payload,
		};
		return this.products[index];
	}

	delete(id: number) {
		const index = this.products.findIndex((item: any) => item.id === id);
		if (index === -1) {
			throw new NotFoundException(`Product => ${id} == Not found!`);
		}
		this.products.splice(index, 1);
		return { message: `Product => ${id} == Has been deleted!` };
	}
}
