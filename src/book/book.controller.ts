import { Body, Controller, Get, Post , Param} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.schema';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService){}

    @Post()
    async createBook(@Body () data: Book){
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
    
}
