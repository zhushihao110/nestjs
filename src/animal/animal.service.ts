import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { AnimalException } from './animal.exception';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  async findAllAnimals(): Promise<Animal[]> {
    return this.animalRepository.find();
  }
  async createAnimal(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const allAnimals = await this.animalRepository.find();
    for (const animal of allAnimals) {
      if (animal.name === createAnimalDto.name) {
        this.logger.error('Animal already exists');
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
