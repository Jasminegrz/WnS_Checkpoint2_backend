import { Field, InputType } from "type-graphql";

@InputType()
export class NewContinentInputType {
  @Field()
  code: string;

  @Field()
  name: string;
}
