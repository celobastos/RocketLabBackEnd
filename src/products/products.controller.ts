import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDTO } from './products.dto';
import { PrismaService } from 'src/database/prisma.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() data: ProductsDTO){
    return this.productsService.create(data);
  }

  @Get()
  async findAll(){{
    return this.productsService.findAll();
  }}

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: ProductsDTO) {
    return this.productsService.update(id,data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }



}
