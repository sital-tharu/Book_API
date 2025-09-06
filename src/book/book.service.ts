import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';
import { async } from 'rxjs';

@Injectable()
export class BookService {
    constructor(
    @InjectModel(Book.name) private bookModel : Model<BookDocument>
    ){}
    async create(book: Book): Promise<Book> {
    return new this.bookModel(book).save();
}
}
