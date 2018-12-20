import { Transport } from '@nestjs/common/enums/transport.enum'
import { NestFactory } from '@nestjs/core'
import { join } from 'path'

import { SmsModule } from './sms.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SmsModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50052',
      package: 'nt_module_sms',
      protoPath: join(__dirname, './protobufs/sms-module.proto')
    }
  })
  await app.listenAsync()
}

bootstrap()
