import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { uuid } from "uuidv4";

export class CreateCompany1589662752294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:"tb_companies",
          columns:[{
            name: 'id',
            type: 'varchar',
            isPrimary:true,
            generationStrategy:'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name:'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name:'cnpj',
            type:'varchar',
            isNullable:true,
          },
          {
            name:'email',
            type:'varchar',
            isNullable:false,
          },
          {
            name:'phone',
            type:'integer',
            isNullable:false,
          },
          {
            name:'date',
            type:'timestamp with time zone',
            isNullable:false,
          }
        ]
        })
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('tb_companies');
    }

}
