import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
    constructor(
    @InjectModel(Book.name) private bookModel : Model<BookDocument>
    ){}
}
