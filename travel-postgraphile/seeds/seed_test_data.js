export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("test").del();

  // Inserts seed entries
  await knex("test").insert([
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 92 },
    { id: 3, name: "Charlie", score: 78 },
  ]);
}
