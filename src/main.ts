import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 创建全局拦截器，统一返回数据格式
  app.useGlobalInterceptors(new ResponseInterceptor());
  // 全局错误过滤器  统一返回错误数据格式
  app.useGlobalFilters(new GlobalExceptionFilter());

  // 全局配置日志
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  await app.listen(3000);
}
bootstrap();
