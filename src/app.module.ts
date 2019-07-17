import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiphersModule } from './ciphers/ciphers.module';

@Module({
  imports: [CiphersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
