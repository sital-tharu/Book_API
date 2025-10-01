import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from '../../model/book.model';
import { BookService } from 'src/book/book.service';
import { createBookInput } from 'src/book/dto/create-book.input';
import { updateBookInput } from 'src/book/dto/update-book.input';

@Resolver()
export class BookResolver {
    constructor(private readonly bookService: BookService) { }

    @Query(() => [Book], { name: 'getAllBooks' })
    async findAll() {
        return this.bookService.findAll();
    }

    @Query(() => Book, { name: 'getBook' })
    async findOne(@Args('id', { type: () => String }) id: string) {
        return this.bookService.findOne(id);
    }

    @Mutation(() => Book)
    async createBook(@Args('input') input: createBookInput) {
        return this.bookService.create(input);
    }

    @Mutation(() => Book)
    async updateteBook(@Args('input') input: updateBookInput) {
        return this.bookService.update(input);
    }
    @Mutation(() => Boolean)
    async deleteeBook(@Args('id', { type: () => String }) id: string) {
        return this.bookService.remove(id);
    }


}
