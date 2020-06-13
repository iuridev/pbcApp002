import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateAddressesCompany1589942381706
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbadressescompany',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'number',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'integer',
          },
          {
            name: 'create_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'companyfkid',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'tbadressescompany',
      new TableForeignKey({
        name: 'fkcompanyadresses',
        columnNames: ['companyfkid'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbcompanies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tbadressescompany', 'fkcompanyadresses');
    await queryRunner.dropTable('tbadressescompany');
  }
}
