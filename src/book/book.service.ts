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

   async update(id: string, book: Partial<Book>): Promise<Book | null> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  } 

  async delete(id: string): Promise<Book | null> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }

}
