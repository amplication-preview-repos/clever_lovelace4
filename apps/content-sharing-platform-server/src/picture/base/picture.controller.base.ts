/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PictureService } from "../picture.service";
import { PictureCreateInput } from "./PictureCreateInput";
import { Picture } from "./Picture";
import { PictureFindManyArgs } from "./PictureFindManyArgs";
import { PictureWhereUniqueInput } from "./PictureWhereUniqueInput";
import { PictureUpdateInput } from "./PictureUpdateInput";

export class PictureControllerBase {
  constructor(protected readonly service: PictureService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Picture })
  async createPicture(
    @common.Body() data: PictureCreateInput
  ): Promise<Picture> {
    return await this.service.createPicture({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Picture] })
  @ApiNestedQuery(PictureFindManyArgs)
  async pictures(@common.Req() request: Request): Promise<Picture[]> {
    const args = plainToClass(PictureFindManyArgs, request.query);
    return this.service.pictures({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Picture })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async picture(
    @common.Param() params: PictureWhereUniqueInput
  ): Promise<Picture | null> {
    const result = await this.service.picture({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Picture })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePicture(
    @common.Param() params: PictureWhereUniqueInput,
    @common.Body() data: PictureUpdateInput
  ): Promise<Picture | null> {
    try {
      return await this.service.updatePicture({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Picture })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePicture(
    @common.Param() params: PictureWhereUniqueInput
  ): Promise<Picture | null> {
    try {
      return await this.service.deletePicture({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
