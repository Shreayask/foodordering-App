import { Knex } from "knex";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex): Promise<void> {
  return knex.schema.createTable("place", (table: Knex.TableBuilder) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("name").notNullable();
    table.specificType("varients", "text[]");
    table.specificType("prices", "json[]");

    table.string("category").notNullable();
    table.string("image").notNullable();
    table.string("description").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex): Promise<void> {
  return knex.schema.dropTable("place");
};
