import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';
import { createBookInput } from './dto/create-book.input';


@Injectable()
export class BookService {
    constructor(
    @InjectModel(Book.name) private bookModel : Model<BookDocument>
    ){}
    async create(input: createBookInput): Promise<Book> {
        const created = new this.bookModel(input);
        return created.save();
}
    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async findOne(id:string): Promise <Book |null> {
        return this.bookModel.findById(id).exec();
    }

    async updateStudent(id: string, book: Partial<Book>): Promise<Book | null>{
      const updated = await this.bookModel.findByIdAndUpdate(id, {
        title: book.title ?? null,
        author: book.author ?? null,
        year: book.year ?? null
      },{ overwrite: true, new: true});
      return updated;
      }
    
    
    


   async update(id: string, book: Partial<Book>): Promise<Book | null> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  } 

  async delete(id: string): Promise<Book | null> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }

}
