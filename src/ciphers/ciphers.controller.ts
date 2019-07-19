import { Controller, Get, Post, Body } from '@nestjs/common';
import { CiphersService } from './ciphers.service';
import { CreateCipherDTO } from './dto/create-cipher.dto';

@Controller('ciphers')
export class CiphersController {
  constructor(private ciphersService: CiphersService) {}

  @Get()
  async getCiphers() {
    const ciphers = await this.ciphersService.getCiphers();
    return ciphers;
  }

  @Post()
  async addCipher(@Body() createCipherDTO: CreateCipherDTO) {
    const cipher = await this.ciphersService.addCipher(createCipherDTO);
    return cipher;
  }
}
