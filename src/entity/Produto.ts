import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export default class Quantidade {

    @PrimaryColumn()
    codPro : Number

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

    @Column()
    selDin : String

    @Column()
    obsPro : String

    @Column()
    datEdi : Date
}