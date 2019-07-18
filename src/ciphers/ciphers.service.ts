import { Injectable, HttpException } from '@nestjs/common';
import { caesarShift } from '../functions/caesarShift';

@Injectable()
export class CiphersService {
  ciphers = [];

  getCiphers(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.ciphers);
    });
  }

  addCipher(cipher): Promise<any> {
    const requiredFields = ['toShift', 'shiftAmount'];
    const missingField = requiredFields.find(field => !(field in cipher));
    const aNumber = typeof cipher.shiftAmount === 'number';
    const aString = typeof cipher.toShift === 'string';

    return new Promise(resolve => {
      if (missingField) {
        throw new HttpException(
          `You're missing the field ${missingField}`,
          422,
        );
      }

      if (!aNumber) {
        throw new HttpException('Shift amount is not a number', 422);
      }

      if (!aString) {
        throw new HttpException('toShift is not a string', 422);
      }

      const afterShift = caesarShift(cipher.toShift, cipher.shiftAmount);

      const newCaesarCipher = {
        toShift: cipher.toShift,
        afterShift,
        shiftAmount: cipher.shiftAmount,
      };

      this.ciphers.unshift(newCaesarCipher);
      resolve(newCaesarCipher);
    });
  }
}
