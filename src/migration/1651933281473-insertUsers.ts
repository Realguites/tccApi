import {MigrationInterface, QueryRunner} from "typeorm";
import User from "../entity/User";

export class insertUsers1651933281473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersRepo = queryRunner.connection.getRepository(User);
        const bcrypt = require("bcrypt");
        await usersRepo.insert([
            {

                name: "Guilherme Schmalfuss Tessmann",
                email: "guilherme.tes@gmail.com",
                password: bcrypt.hashSync("123456", 15),
                level: "A",
                status: "Active",
                registrationDate: new Date(),
                updatedDate: new Date()
        
            } 
        ])
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
