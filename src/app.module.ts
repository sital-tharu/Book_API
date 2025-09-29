import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,

    }),
    MongooseModule.forRoot(process.env.DATABASE_URI!),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
function join(arg0: string, arg1: string): import("@nestjs/graphql").AutoSchemaFileValue | undefined {
  throw new Error('Function not implemented.');
}

