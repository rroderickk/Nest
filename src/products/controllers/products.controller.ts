import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/product.dtos';
import {
	HttpStatus,
	HttpCode,
	Controller,
	Get,
	Param,
	Post,
	Body,
	Put,
	Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) {}

	@Get()
	getProducts() {
		return this.productsService.findAll();
	}

	@Get('/filter')
	getProductsFilter() {
		return `filtro`;
	}

	@Get(':productsId')
	@HttpCode(HttpStatus.ACCEPTED)
	getProduct(
		@Param('productsId', ParseIntPipe)
		productsId: number,
	) {
		return this.productsService.findOne(productsId);
	}

	@Post()
	create(@Body() payload: CreateProductDto) {
		return this.productsService.create(payload);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
		return this.productsService.update(+id, payload);
	}

	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.productsService.delete(+id);
	}
}
