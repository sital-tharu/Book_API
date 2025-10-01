import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class createBookInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    title: string;

    @Field({ nullable: true })
    @IsString()
    dectription?: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    author: string;
}