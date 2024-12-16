import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 5 })
  age: number;

  @Column({ length: 50 })
  email: string;

  @Column({ default: true })
  isActive: boolean;
}
