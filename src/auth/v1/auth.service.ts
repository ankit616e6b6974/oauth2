import { Inject, Injectable } from '@nestjs/common';
import { IAuthRepository } from './auth.interface';
import { GoogleAuthService } from 'src/auth/core/google-auth.service'
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(
    @Inject("IAuthRepository")  //Interface based injection
    private readonly AuthRepository: IAuthRepository,
    @Inject("GoogleAuth")   //Token based injection
    private readonly GoogleAuthService: GoogleAuthService,
  ) {}
  
  getHello(): string {
    return this.AuthRepository.getHello();
  }

  googleAuthUrl(): any {
    return this.GoogleAuthService.getAuthUrl();
  }

  async googleAuthCallback(code: string): Promise<any> {
    const token : string = await this.GoogleAuthService.getToken(code);
    const userinfo : any = await this.GoogleAuthService.getUserInfo(token); 
    console.log(userinfo);
    return userinfo;
  }
}
