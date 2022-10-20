import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import Pedido from "./Pedido"

@Entity()
export default class ProdutoPedido {

    @PrimaryColumn()
	codPro : Number // código do produto

    @Column()
	seqIte : Number

	@Column()
    cnpj : String

    @Column()
	qtdIte : Number // quantidade de itens

	@Column({ type: "float" })
	vlrUni : Number // valor unitario do produto

    @Column({ type: "float" })
	perDes : Number // percentual de desconto

    @Column({ type: "float" })
	vlrDes : Number

    @Column({ type: "float" })
	vlrLiq : Number

    @Column({ type: "float" })
	totIte : Number // valor total do item

    @Column()
	idDisp : String

	@PrimaryColumn()
	pedidoId: number
	
	@ManyToOne(() => Pedido, (pedido) => pedido.produtosPedido)
    pedido: Pedido

}