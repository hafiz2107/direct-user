import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  app.use(passport.initialize());

  await app.listen(configService.get('PORT'), () =>
    console.log(`Listening on http://localhost:${configService.get('PORT')}`),
  );
}
bootstrap();
