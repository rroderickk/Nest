// import { Response } from 'express';
import { BrandsService } from '../services/brands.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
import {
	Controller,
	Get,
	Param,
	Post,
	Body,
	Put,
	Delete,
	//  Res,
	//? ParseIntPipe, de nestjs
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
	constructor(private brandsService: BrandsService) {}

	@Get()
	findAll() {
		return this.brandsService.findAll();
	}

	@Get(':id')
	get(@Param('id', ParseIntPipe) id: number) {
		return this.brandsService.findOne(+id);
	}

	@Post()
	create(@Body() payload: CreateBrandDto) {
		return this.brandsService.create(payload);
	}

	@Put(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() payload: UpdateBrandDto,
	) {
		return this.brandsService.update(id, payload);
	}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.brandsService.remove(+id);
	}
}
