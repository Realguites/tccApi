import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import Quantidade from "./Quantidade"

@Entity()
export default class Produto {

    @PrimaryColumn()
    codPro : Number

    @PrimaryColumn()
    cnpj : String

    @Column()
    codBar : String

    @Column()
    desPro : String

    @Column()
    refPro : String

    @Column()
    uniPro : String

    @Column()
    codGru : String

    @Column()
    codSub : String

    @Column({ nullable: true })
    selDin : String

    @Column({ nullable: true })
    obsPro : String

    @Column({ nullable: true })
    datEdi : Date

    @OneToMany(() => Quantidade, (quantidade) => quantidade.codPro, { eager : true })
}