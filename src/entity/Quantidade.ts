import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export default class Quantidade {

    @PrimaryColumn()
    codPro : Number //código do produto

    @Column()
    codLoj : Number //código da loja

    @Column()
    qtdLoj : Number //quatidade de estoque da loja

    @Column()
    locPro : String //localização do produto

    @Column()
    prcVen : Number // preço de venda

    @Column()
    perDes : Number // % desconto

    @Column()
    prcLiq : Number // preço líquido

    @Column()
    qtdTb1 : Number // Quantidade do preço 1

    @Column()
    prcTb1 : Number // Preço quantidade 1

    @Column()
    qtdTb2 : Number // Quantidade do preço 2

    @Column()
    prcTb2 : Number // Preço quantidade 
}