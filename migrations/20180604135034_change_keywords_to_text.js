
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('universities', function(t) {
  t.text('keywords').alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('universities', function(t) {
  t.string('keywords').alter();
  });
};
