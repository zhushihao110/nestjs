import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './datebase/database.module';
import { AnimalModule } from './animal/animal.module';
import { WinstonLogModule } from './log/winston.module';

@Module({
  imports: [DatabaseModule, WinstonLogModule, UsersModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
