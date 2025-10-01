import { InputType , Field  } from "@nestjs/graphql";
import { IsNotEmpty, IsString  } from "class-validator";

@InputType() 
export class createBookInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    title: string;
}