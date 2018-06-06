
exports.up = function(knex, Promise) {
  return knex.schema.table('universities', function (table) {
  table.string('negativeKeywords');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('universities', function (table) {
    table.dropColumn('negativeKeywords');
  })
};
