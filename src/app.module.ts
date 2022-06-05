import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
	imports: [UsersModule, ProductsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ProductsController } from './controllers/products.controller';
// import { BrandsController } from './controllers/brands.controller';
// import { CategoriesController } from './controllers/categories.controller';
// import { ConstumersController } from './controllers/customers.controller';
// import { OrdersController } from './controllers/orders.controller';
// import { UsersController } from './controllers/users.controller';
// import { FaqsController } from './controllers/faqs.controller';
// import { ProductsService } from './services/products.service';
// import { BrandsService } from './services/brands.service';
// import { CategoriesService } from './services/categories-service.service';
// import { CustomersService } from './services/customer.service';
// import { FaqsService } from './services/faqs.service';
// import { UsersService } from './services/users.service';

// @Module({
// 	imports: [],
// 	controllers: [
// 		AppController,
// 		BrandsController,
// 		CategoriesController,
// 		ConstumersController,
// 		FaqsController,
// 		OrdersController,
// 		ProductsController,
// 		UsersController,
// 	],
// 	providers: [
// 		AppService,
// 		ProductsService,
// 		BrandsService,
// 		CategoriesService,
// 		CustomersService,
// 		FaqsService,
// 		UsersService,
// 	],
// })
// export class AppModule {}
