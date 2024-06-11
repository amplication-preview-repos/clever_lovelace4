import * as graphql from "@nestjs/graphql";
import { PictureResolverBase } from "./base/picture.resolver.base";
import { Picture } from "./base/Picture";
import { PictureService } from "./picture.service";

@graphql.Resolver(() => Picture)
export class PictureResolver extends PictureResolverBase {
  constructor(protected readonly service: PictureService) {
    super(service);
  }
}
