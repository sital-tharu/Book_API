import { Body, Controller, Get, Post , Param, Patch , Delete, Put} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './model/book.model';
import { createBookInput } from './dto/create-book.input';
import { updateBookInput } from './dto/update-book.input';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService){}

    @Post()
    async createBook(@Body () data: createBookInput){
    return this.bookService.create(data);
    }

    @Get()
    async findAll(){
        return this.bookService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string ){
        return this.bookService.findOne(id);
    }
    
  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() data: updateBookInput) {
    return this.bookService.update({ ...data, id: id });
  }


  @Delete(':id')
  async removeBook(@Param('id') id: string) {
    return this.bookService.remove(id);
  }

}
