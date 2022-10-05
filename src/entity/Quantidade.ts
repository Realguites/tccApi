import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import Produto from "./Produto"

@Entity()
export default class Quantidade {

    @PrimaryColumn()
    codPro : Number //código do produto

    @PrimaryColumn()
    codLoj : Number //código da loja

    @Column()
    cnpj : String

    @Column({ nullable: true ,type: "float"})
    qtdLoj : Number //quatidade de estoque da loja

    @Column({ nullable: true })
    locPro : String //localização do produto

    @Column({ type: "float" })
    prcVen : number // preço de venda

    @Column({ nullable: true,type: "float" })
    perDes : Number // % desconto

    @Column({ nullable: true,type: "float" })
    prcLiq : Number // preço líquido

    @Column({ nullable: true,type: "float" })
    qtdTb1 : Number // Quantidade do preço 1

    @Column({ nullable: true,type: "float" })
    prcTb1 : Number // Preço quantidade 1

    @Column({ nullable: true ,type: "float"})
    qtdTb2 : Number // Quantidade do preço 2

    @Column({ nullable: true, type: "float" })
    prcTb2 : Number // Preço quantidade 

    @ManyToOne(() => Produto, (produto) => produto.quantidades)
    produto: Produto
}