/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex:any) {
    return knex.schema.createTable('users', (table:any) => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.boolean('isAdmin').defaultTo(false);
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex:any) {
    return knex.schema.dropTable('users');
};