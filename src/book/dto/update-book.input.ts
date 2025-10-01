import { createBookInput } from "./create-book.input";
import { InputType, PartialType, Field, ID } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class updateBookInput extends PartialType(createBookInput) {
    @Field(() => ID)
    @IsNotEmpty()
    id: string;
}