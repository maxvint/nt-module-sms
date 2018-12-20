import { Controller, Inject } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { SmsService } from '../services/sms.service'

@Controller()
export class SmsController {
  constructor(
    @Inject(SmsService) private readonly smsService: SmsService
  ) { }

  @GrpcMethod('SmsService')
  async sendMessage(data: { name: string }) {
    return this.smsService.sendMessage(data.name)
  }

  @GrpcMethod('SmsService')
  async verifyMessage(data: { mobile: string }) {
    return this.smsService.verifyMessage(data.mobile)
  }
}
