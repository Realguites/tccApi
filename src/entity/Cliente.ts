import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"

@Entity()
export default class Cliente {
    @PrimaryColumn()
	codCli : Number

    @Column()
	nomCli : String

    @Column()
	endCli : String

    @Column()
	baiCli : String

    @Column()
	cidCli : String

    @Column()
	estCli : String

    @Column({ nullable: true })
	cepCli : String

    @Column({ nullable: true })
	fonCli : String

    @Column({ nullable: true })
	docCli : String

    @Column({ nullable: true })
	email : String

    @Column({ nullable: true })
	sitCli : String

    @Column({ nullable: true })
	claCli : String

    @Column({ nullable: true , type: "float"})
	desVen : Number

    @Column({ nullable: true })
	cpfCli : String

    @Column({ nullable: true })
	cnpj : String

    @Column({ nullable: true, type: "float"})
	vlrVen : Number // valor vencido

    @Column({ nullable: true, type: "float" })
	vlrPen : Number // valor pendente
}