import { Injectable } from '@nestjs/common';
import { ProductsDTO } from './products.dto';
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class ProductsService {

    constructor(private prisma: PrismaService) {}

    async create(data: ProductsDTO) {

        const hasProd = await this.prisma.produtos.findFirst({
            where: {
                id: data.id,
            }
        });
        
        if(hasProd) {
            throw new Error('produto já cadastrado');
        }
        const prod = await this.prisma.produtos.create({
           data,
        });

        return prod;
    } 
}
