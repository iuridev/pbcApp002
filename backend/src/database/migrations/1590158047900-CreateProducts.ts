import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateProducts1590158047900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbproducts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'integer',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'weight',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'integer',
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
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
            name: 'company_fk_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'tbproducts',
      new TableForeignKey({
        name: 'fkcompanyproduct',
        columnNames: ['company_fk_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tbcompanies',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tbproducts', 'fkcompanyproduct');
    await queryRunner.dropTable('tbproducts');
  }
}
