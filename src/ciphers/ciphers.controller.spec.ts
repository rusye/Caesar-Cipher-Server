import { Test, TestingModule } from '@nestjs/testing';
import { CiphersController } from './ciphers.controller';
import { CiphersService } from './ciphers.service';

describe('Ciphers Controller', () => {
  let controller: CiphersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiphersController],
      providers: [CiphersService],
    }).compile();

    controller = module.get<CiphersController>(CiphersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
