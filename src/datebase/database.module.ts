import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '101.34.44.99',
      port: 3306,
      username: 'zsh-1213',
      password: 'Zsh2024@',
      database: 'demo_zhushihao',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class DatabaseModule {}
