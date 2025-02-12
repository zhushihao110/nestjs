import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('login')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Post()
  async validateToken(
    @Body() data: { token: string; name?: string },
  ): Promise<boolean> {
    console.log('validateToken', data);
    return this.authService.validateToken(data.token);
  }
  @Post('login')
  async login(@Body() user: any): Promise<any> {
    // this.authService.validateToken(user.token);

    this.logger.info('User login', JSON.stringify(user));
    return this.authService.login(user);
  }

  @Post('logout')
  async logout(@Body() user: any): Promise<any> {
    return this.authService.logout(user);
  }
}
