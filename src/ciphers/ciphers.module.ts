import { Module } from '@nestjs/common';
import { CiphersController } from './ciphers.controller';

@Module({
  controllers: [CiphersController]
})
export class CiphersModule {}
