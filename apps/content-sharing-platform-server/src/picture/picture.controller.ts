import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PictureService } from "./picture.service";
import { PictureControllerBase } from "./base/picture.controller.base";

@swagger.ApiTags("pictures")
@common.Controller("pictures")
export class PictureController extends PictureControllerBase {
  constructor(protected readonly service: PictureService) {
    super(service);
  }
}
