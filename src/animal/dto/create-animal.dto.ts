import { IsString, IsBoolean } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  name: string;

  @IsBoolean()
  isCat?: boolean;
}
