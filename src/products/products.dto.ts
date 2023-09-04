import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class ProductsDTO {
  id?: number;

  @IsNotEmpty({ message: 'O nome do produto não pode estar vazio' })
  @IsString({ message: 'O nome deve ser uma string' })
  name: string;

  @IsNotEmpty({ message: 'O preço não pode estar vazio' })
  @IsNumber({ message: 'O preço deve ser um número' })
  price: number;

  @IsNotEmpty({ message: 'A imagem não pode estar vazia' })
  @IsString({ message: 'A imagem deve ser uma string' })
  image: string;

  @IsNotEmpty({ message: 'O campo beenComprado não pode estar vazio' })
  @IsBoolean({ message: 'O campo beenComprado deve ser um booleano' })
  beenComprado: boolean;

  @IsNotEmpty({ message: 'O campo disponivelComprado não pode estar vazio' })
  @IsBoolean({ message: 'O campo disponivelComprado deve ser um booleano' })
  disponivelComprado: boolean;
}
