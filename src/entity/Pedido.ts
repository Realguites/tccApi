import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import ProdutoPedido from "./ProdutoPedido"

@Entity()
export default class Pedido{
    @PrimaryGeneratedColumn()
    id : Number

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

    @Column({ type: "float" })
    perDes : Number

    @Column({ type: "float" })
    vlrReg : Number

    @Column()
    data : Date

    @Column()
    hora : Date

    @Column()
    obsAte : String

    @Column()
    idDisp : String

    @OneToMany(() => ProdutoPedido, (produtoPedido) => produtoPedido.pedido ,{cascade:true}) // note: we will create author property in the Photo class below
    produtosPedido: ProdutoPedido[]
}