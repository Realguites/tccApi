import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Pedido{
    @PrimaryGeneratedColumn()
    regAte : Number

    @Column()
    codLoj : Number

    @Column()
    codAte : Number

    @Column()
    codMod : Number

    @Column()
    codCli : Number

    @Column()
    nomCli : String

    @Column()
    perDes : Number

    @Column()
    vlrReg : Number

    @Column()
    data : Date

    @Column()
    hora : Date

    @Column()
    obsAte : String

    @Column()
    idDisp : String
}