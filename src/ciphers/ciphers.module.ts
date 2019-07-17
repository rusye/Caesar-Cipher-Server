import { Module } from '@nestjs/common';
import { CiphersController } from './ciphers.controller';
import { CiphersService } from './ciphers.service';

@Module({
  controllers: [CiphersController],
  providers: [CiphersService]
})
export class CiphersModule {}
