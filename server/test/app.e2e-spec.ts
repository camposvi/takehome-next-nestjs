import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
<<<<<<< HEAD
import { AppModule } from './../src/app.module';
=======
import { AppModule } from '../app.module';
>>>>>>> server-development

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
<<<<<<< HEAD
      .expect('Hello World!');
=======
      .expect('Api is running!');
>>>>>>> server-development
  });
});
