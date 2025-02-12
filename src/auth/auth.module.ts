import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

@Module({
  imports: [JwtModule],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
