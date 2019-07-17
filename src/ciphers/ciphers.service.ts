import { Injectable, HttpException } from '@nestjs/common';
import { CIPHERS } from '../mocks/ciphers.mock';

@Injectable()
export class CiphersService {
  ciphers = CIPHERS;

  getCiphers(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.ciphers);
    });
  }

  addCipher(cipher): Promise<any> {
    return new Promise(resolve => {
      this.ciphers.push(cipher);
      resolve(this.ciphers);
    });
  }
}
