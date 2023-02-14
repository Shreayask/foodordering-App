/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex:any) {
    return knex.schema.createTable('pizzas', (table:any) => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('name').notNullable();
        table.specificType('varients', 'text[]');
        table.specificType('prices', 'json[]');


        table.string('category').notNullable();
        table.string('image').notNullable();
        table.string('description').notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex:any) {
    return knex.schema.dropTable('pizzas');
};
