import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';


@Injectable()
export class BookService {
    constructor(
    @InjectModel(Book.name) private bookModel : Model<BookDocument>
    ){}
    async create(book: Book): Promise<Book> {
    return new this.bookModel(book).save();
}
    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async findOne(id:string): Promise <Book |null> {
        return this.bookModel.findById(id).exec();
    }
}
