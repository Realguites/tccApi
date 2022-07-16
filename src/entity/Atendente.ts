import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"
import User from "./User"

@Entity()
export default class Atendente extends User{

    @Column()
    codAte: number

    @Column({ nullable: true })
    senAte: string

    @Column()
    nivAte: string

    @Column()
    nomAte: string

    @Column()
    cnpj: string
}
