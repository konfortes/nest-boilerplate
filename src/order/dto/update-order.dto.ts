import { IsEmpty } from 'class-validator'

export class UpdateOrderDto {
  @IsEmpty()
  id: number
  merchantUrl: string
  customerName: string
  amount: number
}
