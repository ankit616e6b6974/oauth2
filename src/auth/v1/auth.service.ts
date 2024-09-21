import { Inject, Injectable } from '@nestjs/common';
import { IAuthRepository } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject("IAuthRepository") 
    private AuthRepository: IAuthRepository 
  ) {}
  
  getHello(): string {
    return this.AuthRepository.getHello();
  }
}
