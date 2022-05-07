import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class User extends BaseEntity{

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

    @Column()
    registrationDate: Date

    @Column()
    updatedDate: Date

}
