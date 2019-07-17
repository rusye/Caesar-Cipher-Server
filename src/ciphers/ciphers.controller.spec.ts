import { Test, TestingModule } from '@nestjs/testing';
import { CiphersController } from './ciphers.controller';

describe('Ciphers Controller', () => {
  let controller: CiphersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiphersController],
    }).compile();

    controller = module.get<CiphersController>(CiphersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
