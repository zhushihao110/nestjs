import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    getCats(@Req() request: Request): string {
        console.log(request);
        return 'This action returns all cats';
    }
    @Post()
    create(): string {
        return "this action adds a new cat";
    }
}
