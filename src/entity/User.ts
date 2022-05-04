import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    senha: string

    @Column()
    level: string

    @Column()
    status: string

    @Column()
    registrationDate: Date

    @Column()
    updatedDate: Date

}
