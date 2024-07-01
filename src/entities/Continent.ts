import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Country from "./Country";

@Entity()
@ObjectType()
export default class Continent extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Country, (country) => country.continent)
  @Field(() => [Country])
  countries: Country[];
}
