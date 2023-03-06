import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Здесь будут все фильмы';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `Здесь будет один фильм с id: ${movieId}`;
  }

  @Post()
  create() {
    return 'Здесь создаем новый фильм';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Здесь удаляем фильм по id:  ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `Здесь возвращаем отредактированый фильм с id ${movieId}`;
  }
}
