import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Здесь будут все фильмы';
  }

  @Get('search')
  search(@Query('year') searchYear: string) {
    return `Поиск по году ${searchYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `Здесь будет один фильм с id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    //console.log(movieData);
    //return 'Здесь создаем новый фильм';
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `Здесь удаляем фильм по id:  ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    //return `Здесь возвращаем отредактированый фильм с id ${movieId}`;
    return {
      updateData: movieId,
      ...updateData,
    };
  }
}
