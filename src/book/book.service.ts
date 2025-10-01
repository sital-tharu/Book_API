import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';
import { createBookInput } from './dto/create-book.input';
import { updateBookInput } from './dto/update-book.input';


@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>
  ) { }
  async create(input: createBookInput): Promise<Book> {
    const created = new this.bookModel(input);
    return created.save();
  }
  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book | null> {
    return this.bookModel.findById(id).exec();
  }

  async update(input: updateBookInput):
    Promise<Book> {
    const existingBook = await this.bookModel.findById(input.id);
    if (!existingBook) throw new NotFoundException('Book not Found!')
    Object.assign(existingBook, input);
    return existingBook.save();
  }
  async remove(id: string): Promise<boolean> {
    const result = await this.bookModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Book not Found!')
    return true;
  }
}