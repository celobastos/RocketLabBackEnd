import { Controller, Post, Body } from '@nestjs/common';
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
}