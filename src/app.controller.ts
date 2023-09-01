import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { produtos as produtosModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getHello(): Promise<{ members: produtosModel | null }> {
    try {
      const members = await this.prisma.produtos.create({
        data: {
          id: '3',
          name: 'camisa brasil fiba',
          preco: 200,
          imagem: 'algo/seila/imagesss',
        },
      });
      return { 
        members 
      };
    } 
    catch (error) {
      throw new HttpException(
        'Error occurred while creating produto',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
