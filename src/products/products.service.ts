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
    
    async findAll(){
        return this.prisma.produtos.findMany();
    }

    async update(id: number, data: ProductsDTO) {
        const numericId = Number(id);  
        const hasProd = await this.prisma.produtos.findUnique({
            where:{
                id: numericId,  
            },
        });
        if(!hasProd){
            throw new Error('Produto nao existe');
        }
    
        return await this.prisma.produtos.update({
            data,
            where:{
                id: numericId,  
            },
        });
    }
    async delete(id: number) {
        const numericId = Number(id); 
        const hasProd = await this.prisma.produtos.findUnique({
            where:{
                id: numericId, 
            },
        });
        if(!hasProd){
            throw new Error('Produto nao existe');
        }
    
        return await this.prisma.produtos.delete({
            where:{
                id: numericId,  
            },
        });
    }
    async findOne(id: number) {
        const numericId = Number(id);
        const hasProd = await this.prisma.produtos.findUnique({
          where: {
            id: numericId,
          },
        });
      
        if (!hasProd) {
          throw new Error('Produto nao encontrado');
        }
      
        return hasProd;
      }

    async purchaseOne(id: number) {
        const numericId = Number(id);
        const hasProd = await this.prisma.produtos.findUnique({
          where: {
            id: numericId,
          },
        });

        if(!hasProd) {
            throw new Error('Produto nao encontrado');
        }

        if (!hasProd.disponivelCompra) {
        
            throw new Error('Produto nao está disponível para compra');
        }

        const produtoComprado = this.prisma.produtos.update({
            data:{
                beenComprado: true,
                disponivelCompra: false,
            },
            where:{
                id: numericId,  
            },
        });
        console.log('Compra bem sucedida! Produto atualizado:', produtoComprado);

        return produtoComprado;
    }
    
    
}
