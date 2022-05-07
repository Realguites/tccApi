import {MigrationInterface, QueryRunner} from "typeorm";
import User from "../entity/User";

export class insertUsers1651933281473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersRepo = queryRunner.connection.getRepository(User);
        await usersRepo.insert([
            {

                name: "Guilherme Schmalfuss Tessmann",
                email: "guilherme.tes@gmail.com",
                password: "e10adc3949ba59abbe56e057f20f883e",
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
