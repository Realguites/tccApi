import { Entity, Column,  PrimaryColumn} from "typeorm"

@Entity()
export default class Modalidade {

    @PrimaryColumn()
    codMod : Number

    @PrimaryColumn()
    cnpj : String
    
    @Column()
    ideMod : String

    @Column()
    nivMod : String

    @Column()
    desCad : String // char para cada produto se possui desconto ou não na hora do cadastro;

    @Column()
    desIte : String // char para cada item ____________||____________________||________;

    @Column()
    limDes : Number

    @Column()
    modApr : String


}