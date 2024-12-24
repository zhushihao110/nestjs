import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn() // 自增ID
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ default: true })
  isActive: boolean;
}
