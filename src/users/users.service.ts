/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";



@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
}