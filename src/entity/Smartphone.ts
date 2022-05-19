import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export default class Smartphone {

    @PrimaryColumn()
    idDisp: string

    @Column()
    cnpj: string

    @Column()
    usuario: string

    @Column({ nullable: true })
    status: string

    @Column({ nullable: true })
    codLoj: number

    @Column({ nullable: true })
    nomLoj: string

    @Column()
    versao: string

    @Column({ nullable: true })
    autCgm: string

    @Column({ nullable: true })
    nLocal: number

    @Column({ nullable: true })
    nAndroid: number

    @Column({ nullable: true })
    dLocal: string

    @Column({ nullable: true })
    dAndroid: string

    @Column({ nullable: true })
    versaoEstavel: string

    @Column({ nullable: true })
    linkAtualizacao: string

    @Column({ nullable: true })
    registrationDate: Date

    @Column({ nullable: true })
    updatedDate: Date

}
