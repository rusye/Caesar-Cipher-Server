import { Controller, Get, Post, Body } from '@nestjs/common';
import { CiphersService } from './ciphers.service'
import { CreateCipherDTO } from './dto/create-cipher.dto'

@Controller('ciphers')
export class CiphersController {
  constructor(private ciphersService: CiphersService) { }

    @Get()
    async getCiphers() {
        const books = await this.ciphersService.getCiphers();
        return books;
    }

    @Post()
    async addCipher(@Body() createCipherDTO: CreateCipherDTO) {
        const book = await this.ciphersService.addCipher(createCipherDTO);
        return book;
    }
}
