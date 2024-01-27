/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DEFAULT_PORT, GLOBAL_PREFIX } from './app/email-subsriber/email-subscriber.constant';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = GLOBAL_PREFIX;
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.DEFAULT_PORT || DEFAULT_PORT;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
