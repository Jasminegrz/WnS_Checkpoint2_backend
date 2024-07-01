import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Country from "../entities/Country";
import { NewCountryInputType } from "../types/NewCountryInputType";
import { GraphQLError } from "graphql";

@Resolver(Country)
export default class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return Country.find({
      relations: { continent: true },
    });
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("countryCode") code: string) {
    const country = await Country.findOne({
      where: { code },
      relations: { continent: true },
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
      relations: { continent: true },
    });
  }
}
