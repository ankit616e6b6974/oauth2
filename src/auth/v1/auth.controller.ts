import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({version: "1"})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("hello")
  getHello(): string {
    return this.authService.getHello();
  }
}
