import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({path:"auth"})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("hello")
  getHello(): string {
    return this.authService.getHello();
  }

  @Get("google-auth-url")
  googleAuthUrl(): any {
    return this.authService.googleAuthUrl();
  }

  @Get("google")
  @Redirect()
  googleLogin(): any {
    return {url : this.authService.googleAuthUrl()};
  }

  @Get("google/callback")
  googleAuthCallback(@Query('code') code: string): any {
    const userinfo = this.authService.googleAuthCallback(code);
    return userinfo;
  }
}

