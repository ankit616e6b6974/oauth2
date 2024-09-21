import { Injectable } from "@nestjs/common";
import { IAuthRepository } from "./auth.interface";

@Injectable()
export class AuthRepository implements IAuthRepository {

    getHello(): string {
        return'Hello World!';
    }
}
