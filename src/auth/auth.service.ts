import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRedis() private redis: Redis,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  async login(user: any) {
    const payload = { name: user.name, id: user.id };

    console.log(payload, '=--==-=-=-=');
    // 生成token  此处参数中必须加上secret 否则会报错
    const token = this.jwtService.sign(payload, {
      secret: 'zsh-jwt',
      expiresIn: 3600,
    });

    console.log(token, '=--==-token=-=-=');
    // token存入redis 过期时间1小时
    await this.redis.set(
      `zsh-token:${user.name}`,
      JSON.stringify({ token }),
      'EX',
      3600,
    );
    this.logger.info(`${user.name}:登录成功--${token}`);
    return { token };
  }

  async validateToken(token: string): Promise<any> {
    // 解码token
    const decode = this.jwtService.verify(token, { secret: 'zsh-jwt' });
    console.log(decode, '=--==-token=-=-=');
    // 检查redis中是否存在token
    const storeToken = await this.redis.get(`zsh-token:${decode.name}`);
    console.log(JSON.parse(storeToken), '=--==-token=-=-=');
    if (!storeToken) {
      return {
        code: 401,
        message: 'token失效',
        data: null,
      };
    }
    return JSON.parse(storeToken).token === token;
  }

  async logout(user: any) {
    // 删除redis中的token
    return await this.redis.del(`zsh-token:${user.name}`);
  }
}
