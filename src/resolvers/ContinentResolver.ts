import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Continent from "../entities/Continent";
import { NewContinentInputType } from "../types/NewContinentInputType";

@Resolver(Continent)
export default class ContinentResolver {
  @Query(() => [Continent])
  async continents() {
    return Continent.find();
  }

  @Mutation(() => Continent)
  async createContinent(@Arg("data") data: NewContinentInputType) {
    const newContinent = new Continent();
    Object.assign(newContinent, data);
    const { id } = await newContinent.save();
    return Continent.findOne({
      where: {
        id,
      },
    });
  }
}
