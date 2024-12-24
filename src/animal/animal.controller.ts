import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Animal } from './animal.entity';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  findAllAnimals(): Promise<Animal[]> {
    return this.animalService.findAllAnimals();
  }
  @Post()
  creteAnimal(@Body() createAnimalDto: CreateAnimalDto): any {
    return this.animalService.createAnimal(createAnimalDto);
  }
}
