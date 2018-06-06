
exports.up = function(knex, Promise) {
  return knex.schema.createTable('universities', table => {
  table.increments();
  table.string('name', 64);
  table.string('state', 32);
  table.string('location', 32); //urban or rural
  table.integer('size');
  table.string('poster_url');
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('universities');
};
