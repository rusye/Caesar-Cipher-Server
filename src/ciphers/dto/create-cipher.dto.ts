export class CreateCipherDTO {
  readonly id: number;
  readonly beforeCipher: string;
  readonly afterCipher: string;
  readonly shiftAmount: number;
}