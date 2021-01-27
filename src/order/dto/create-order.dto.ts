import { IsNotEmpty } from 'class-validator'

// full list of decorators can be found here: https://github.com/typestack/class-validator#validation-decorators

export class CreateOrderDto {
  @IsNotEmpty()
  merchantUrl: string

  @IsNotEmpty()
  customerName: string

  amount: number
}
