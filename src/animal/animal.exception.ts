import { HttpException, HttpStatus } from '@nestjs/common';

export class AnimalException extends HttpException {
  constructor(data: { errorMessage: string; statusCode: string }) {
    super(
      { statusCode: data.statusCode, errorMessage: data.errorMessage },
      HttpStatus.BAD_REQUEST,
    );
  }
}
