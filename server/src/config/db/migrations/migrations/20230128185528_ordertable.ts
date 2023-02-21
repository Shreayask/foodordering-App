import { Knex } from "knex";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex): Promise<void> {
  return knex.schema.createTable("orders", (table: Knex.TableBuilder) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("userid").references("users.id");
    table.specificType("orderitems", "json[]");
    table.integer("orderAmount");
    table.string("shippingAddress").notNullable();
    table.string("phoneNumber").notNullable();
    table.string("message").notNullable();
    table.string("isDelivered").defaultTo("Pending");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex): Promise<void> {
  return knex.schema.dropTable("orders");
};
