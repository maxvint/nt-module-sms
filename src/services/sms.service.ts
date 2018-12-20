import { Injectable } from '@nestjs/common'

@Injectable()
export class SmsService {
  async sendMessage(name: string) {
    return { msg: `Hello ${name}!` }
  }

  async verifyMessage(mobile: string) {
    return { msg: `Verify ${mobile}!` }
  }
}
