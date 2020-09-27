import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  merchantUrl: string

  @Column()
  customerName: string

  @Column({ default: 0 })
  amount: number
}
