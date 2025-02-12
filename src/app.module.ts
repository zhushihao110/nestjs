import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './datebase/database.module';
import { AnimalModule } from './animal/animal.module';
import { WinstonLogModule } from './log/winston.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    RedisModule.forRoot({
      type: 'single',
      url: 'redis://101.34.44.99:6379',
      options: {
        password: 'Kdxf2021@',
        db: 1,
      },
    }),
    DatabaseModule,
    WinstonLogModule,
    UsersModule,
    AnimalModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
