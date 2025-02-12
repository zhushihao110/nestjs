import { IsString, IsInt } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  name: string;

  @IsInt()
  id: number;

  @IsString()
  token?: string;
}
