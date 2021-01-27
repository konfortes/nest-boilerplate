import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrders1611694928495 implements MigrationInterface {
    name = 'createOrders1611694928495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("id" BIGSERIAL NOT NULL, "merchant_url" character varying NOT NULL, "customer_name" character varying NOT NULL, "amount" integer NOT NULL DEFAULT 0, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
