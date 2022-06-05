import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
	@Get('')
	getOrders(@Param('ordersId') ordersId: string) {
		const ord: string = 'Get Orders';
		return ord;
	}

	@Get(':ordersId')
	getOrdersId(@Param('ordersId') ordersId: string) {
		const ord: string = 'Get Orders';
		return `${ord} ${ordersId}`;
	}
}
