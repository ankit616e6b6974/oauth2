import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { IAuthRepository } from './auth.interface';
import { GoogleAuthService } from '../core/google-auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'IAuthRepository',
      useClass: AuthRepository,
    },
    {
      provide: 'GoogleAuth',
      useClass: GoogleAuthService,
    }],
})
export class AuthModule {}
