export function up(knex) {
  return knex.schema.createTable("test", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("score").notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("test");
}
