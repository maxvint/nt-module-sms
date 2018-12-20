import { Module } from '@nestjs/common'

import { SmsController } from './controllers/sms.controller'
import { SmsService } from './services/sms.service'

@Module({
  controllers: [SmsController],
  providers: [SmsService]
})
export class SmsModule {}
