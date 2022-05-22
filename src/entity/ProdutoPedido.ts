import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export default class Smartphone {

    @PrimaryColumn()
    regAte : Number

    @Column()
	codPro : Number // código do produto

    @Column()
	seqIte : Number

    @Column()
	qtdIte : Number // quantidade de itens

    @Column()
	vlrUni : Number // valor unitario do produto

    @Column()
	perDes : Number // percentual de desconto

    @Column()
	vlrDes : Number

    @Column()
	vlrLiq : Number

    @Column()
	totIte : Number // valor total do item

    @Column()
	idDisp : String

}