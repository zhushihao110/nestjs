import { IsString, IsInt } from 'class-validator';

export class CreateUser {
  @IsString()
  name: string;

  @IsInt()
  age?: number;
}
