
exports.up = function(knex, Promise) {
  return knex.schema.table('universities', function (table) {
  table.string('keywords');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('universities', function (table) {
    table.dropColumn('keywords');
  })
};
