import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Country from "../entities/Country";
import { NewCountryInputType } from "../types/NewCountryInputType";
import { GraphQLError } from "graphql";

@Resolver(Country)
export default class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return Country.find();
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string) {
    const country = await Country.findOne({
      where: { code },
    });
    if (!country) {
      throw new GraphQLError("Country not found");
    }
    return country;
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
