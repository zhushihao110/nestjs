import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    response.status(status).json({
      success: false,
      message:
        exception instanceof HttpException
          ? exception.message
          : 'Internal server error',
      error:
        exception instanceof HttpException ? exception.getResponse() : null,
    });
  }
}
