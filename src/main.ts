import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = process.env.APP_PORT || '3000';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('auth/api', {
    exclude: ['health'],
  });
  await app.listen(PORT);
}

bootstrap().catch(err => {
  throw Error(err);
});