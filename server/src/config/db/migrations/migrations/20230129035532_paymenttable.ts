import { Knex } from "knex";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex): Promise<void> {
  return knex.schema.createTable("payment", (table: Knex.TableBuilder) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("userid").references("users.id");
    table.uuid("orderid").references("orders.id");
    table.integer("paidAmount");
    table.boolean("isPaid").defaultTo(false);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex): Promise<void> {
  return knex.schema.dropTable("payment");
};
