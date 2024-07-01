import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Country from "../entities/Country";
import { NewCountryInputType } from "../types/NewContryInputType";

@Resolver(Country)
export default class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return Country.find();
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: NewCountryInputType) {
    const newCountry = new Country();
    Object.assign(newCountry, data);
    const { id } = await newCountry.save();
    return Country.findOne({
      where: {
        id,
      },
    });
  }
}
