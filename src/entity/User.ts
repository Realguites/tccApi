import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class User{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    name: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    password: string

    @Column({ nullable: true })
    level: string

    @Column({ nullable: true })
    status: string

    @Column({ nullable: true })
    registrationDate: Date

    @Column({ nullable: true })
    updatedDate: Date

    @Column({ nullable: true })
    cnpj: string


}
