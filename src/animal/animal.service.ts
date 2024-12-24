import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { AnimalException } from './animal.exception';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  async findAllAnimals(): Promise<Animal[]> {
    return this.animalRepository.find();
  }
  async createAnimal(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const allAnimals = await this.animalRepository.find();
    for (const animal of allAnimals) {
      if (animal.name === createAnimalDto.name) {
        throw new AnimalException({
          errorMessage: 'Animal already exists',
          statusCode: '0001111',
        });
      }
    }
    console.log(createAnimalDto);
    const result = await this.animalRepository.save(createAnimalDto);
    if (result.id) {
      return result;
    }
  }
}
