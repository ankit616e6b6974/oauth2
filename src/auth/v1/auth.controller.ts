import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({version: "1", path:"auth"})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("hello")
  getHello(): string {
    return this.authService.getHello();
  }

  @Get("google")
  googleLogin(): any {
    return this.authService.googleLogin();
  }
}

