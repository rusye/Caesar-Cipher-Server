import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpService, HttpModule } from '@nestjs/common';
import { AppModule } from '../app.module';
import { CiphersService } from './ciphers.service';
import { CiphersController } from './ciphers.controller';
import { CreateCipherDTO } from './dto/create-cipher.dto';
import * as request from 'supertest';

describe('CiphersService', () => {
  let app: INestApplication;
  let httpService: HttpService;
  let service: CiphersService;
  let controller: CiphersController;

  beforeEach(async () => {
    service = new CiphersService();
    controller = new CiphersController(service);

    const testAppModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule],
      controllers: [CiphersController],
      providers: [CiphersService],
    }).compile();

    app = testAppModule.createNestApplication();
    service = testAppModule.get<CiphersService>(CiphersService);
    httpService = testAppModule.get<HttpService>(HttpService);
    await app.init();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an empty array', async () => {
    const result = [];
    jest.spyOn(service, 'getCiphers').mockImplementation();
    expect(await controller.getCiphers()).toEqual(result);
  });

  it('should add a new query and a GET request will return it', async () => {
    const createCipherDTO: CreateCipherDTO = {
      toShift: 'I love JavaScript!',
      shiftAmount: 100,
      afterShift: 'E hkra FwrwOynelp!',
    };
    const result = [createCipherDTO];
    jest.spyOn(service, 'getCiphers').mockImplementation();
    expect(await controller.addCipher(createCipherDTO));
    expect(await controller.getCiphers()).toEqual(result);
  });

  // I wasn't able to figure out all of the unit testing with the controller
  // and the service so I decided to go with e2e testing
  it('post should fail because of a missing field', async () => {
    return await request(app.getHttpServer())
      .post('/ciphers')
      .send({
        shiftAmount: 100,
      })
      .then(res => {
        expect(res.status).toBe(422);
        expect(res.body.message).toEqual("You're missing the field toShift");
      });
  });

  it("post should fail because toShift isn't a string", async () => {
    return await request(app.getHttpServer())
      .post('/ciphers')
      .send({
        toShift: 5,
        shiftAmount: 100,
      })
      .then(res => {
        expect(res.status).toBe(422);
        expect(res.body.message).toEqual('toShift is not a string');
      });
  });

  it("post should fail because shiftAmount isn't a number", async () => {
    return await request(app.getHttpServer())
      .post('/ciphers')
      .send({
        toShift: 'Hello',
        shiftAmount: '100',
      })
      .then(res => {
        expect(res.status).toBe(422);
        expect(res.body.message).toEqual('Shift amount is not a number');
      });
  });

  it("post should fail because toShift can't be an empty string", async () => {
    return await request(app.getHttpServer())
      .post('/ciphers')
      .send({
        toShift: '',
        shiftAmount: 100,
      })
      .then(res => {
        expect(res.status).toBe(422);
        expect(res.body.message).toEqual("toShift can't be an empty string");
      });
  });

  it('It should successfully encrypt', async () => {
    const data = {
      toShift: 'I love JavaScript!',
      shiftAmount: 100,
    };

    const expectedResponse = {
      toShift: 'I love JavaScript!',
      shiftAmount: 100,
      afterShift: 'E hkra FwrwOynelp!',
    };
    return await request(app.getHttpServer())
      .post('/ciphers')
      .send(data)
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body).toEqual(expectedResponse);
        expect(res.body.toShift).toEqual(data.toShift);
        expect(res.body.shiftAmount).toEqual(data.shiftAmount);
        expect(res.body.afterShift).toEqual('E hkra FwrwOynelp!');
      });
  });
});
