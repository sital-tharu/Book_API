import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.schema';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService){}

    @Post()
    async createBook(@Body () data: Book){
    return this.bookService.create(data);
    }
}
