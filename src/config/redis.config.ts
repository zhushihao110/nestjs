import {
  RedisModuleOptions,
  RedisModuleOptionsFactory,
} from '@nestjs-modules/ioredis';

export class RedisConfigService implements RedisModuleOptionsFactory {
  createRedisModuleOptions(): RedisModuleOptions {
    return {
      type: 'single',
      url: 'redis://101.34.44.99:6379',
      options: {
        password: 'Kdxf2021@',
        db: 1,
      },
    };
  }
}
