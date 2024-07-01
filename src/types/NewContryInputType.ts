import { Field, InputType } from "type-graphql";

@InputType()
export class NewCountryInputType {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
