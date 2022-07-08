import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class User{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    level: string

    @Column()
    status: string

    @Column({ nullable: true })
    registrationDate: Date

    @Column({ nullable: true })
    updatedDate: Date

    @Column({ nullable: true })
    cnpj: string


}
