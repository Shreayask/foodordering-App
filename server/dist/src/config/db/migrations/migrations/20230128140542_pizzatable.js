"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("pizzas", (table) => {
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
exports.down = function (knex) {
    return knex.schema.dropTable("pizzas");
};
//# sourceMappingURL=20230128140542_pizzatable.js.map