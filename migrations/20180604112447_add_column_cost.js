
exports.up = function(knex, Promise) {
  return knex.schema.table('universities', function (table) {
  table.integer('cost');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('universities', function (table) {
    table.dropColumn('cost');
  })
};
