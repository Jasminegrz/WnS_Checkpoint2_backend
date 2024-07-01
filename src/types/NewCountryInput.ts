import { Field, InputType } from "type-graphql";

@InputType()
export class NewCountryInput {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
