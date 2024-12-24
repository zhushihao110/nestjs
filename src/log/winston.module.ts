import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const levelsColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'blue',
  verbose: 'cyan',
};

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new DailyRotateFile({
          filename: 'appLogs/application-%DATE%.log', // 日志文件名称模板
          datePattern: 'YYYY-MM-DD', // 每天生成一个日志文件
          zippedArchive: true, // 是否压缩旧日志
          maxSize: '20m', // 文件大小限制
          maxFiles: '3d', // 保留 7 天的日志
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.colorize({ colors: levelsColors }),
            winston.format.printf(({ timestamp, level, message }) => {
              return `${timestamp} [${level}] :${message}`;
            }),
          ),
        }),
      ],
    }),
  ],
})
export class WinstonLogModule {}
