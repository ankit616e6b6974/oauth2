import { Module } from '@nestjs/common';
import { AuthModule } from './auth/v1/auth.module';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
