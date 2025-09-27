import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.schema';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookResolver } from './resolvers/book/book.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])
  ],
  controllers: [BookController],
  providers: [BookService, BookResolver],
})
export class BookModule {}