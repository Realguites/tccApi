import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"
import User from "./User"

@Entity()
export default class Atendente{

    @PrimaryColumn()
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
