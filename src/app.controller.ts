import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('products')
	getProducts(
		@Query('limit') limit: number,
		@Query('offset') offset: number,
		@Query('brand') brand: string,
	) {
		return `products: limit=>${limit} offset=>${offset} brand=>${brand}`;
	}
	@Get('hello')
	getHello(): string {
		return this.appService.getHello();
	}

	// Rutas--links--Endpoints
	@Get('products/:productsId')
	getProduct(@Param('productsId') productsId: string) {
		return `productId=>${productsId}`;
	}

	@Get('products/filter')
	getProductFilter() {
		return `=>filter`;
	}

	// Rutas--links--Endpoints
	@Get('new')
	newEndPoint() {
		return `NewEndPoint`;
	}

	// Rutas--links--Endpoints. Tips Usar NombresEnPlurales
	@Get('/ruta/')
	SecondEndPoint() {
		return `2End/Point/`;
	}
}
