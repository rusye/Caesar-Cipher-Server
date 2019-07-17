import { Test, TestingModule } from '@nestjs/testing';
import { CiphersService } from './ciphers.service';

describe('CiphersService', () => {
  let service: CiphersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CiphersService],
    }).compile();

    service = module.get<CiphersService>(CiphersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
