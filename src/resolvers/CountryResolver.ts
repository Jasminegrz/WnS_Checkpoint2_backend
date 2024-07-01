import { Query, Resolver } from "type-graphql";
import Country from "../entities/Country";

@Resolver(Country)
export default class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return Country.find();
  }
}
