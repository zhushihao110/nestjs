import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryColumn('uuid') // 指定主键为 UUID 类型
  @Generated('uuid')
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ default: false })
  isCat: boolean;
}
