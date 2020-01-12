
exports.up = function(knex) {
  return knex.schema.table('homes', t => {
      t.dropColumn('material')
  })
};

exports.down = function(knex) {
  return knex.schema.table('homes', t => {
      t.dropTable('homes')
  })
};
