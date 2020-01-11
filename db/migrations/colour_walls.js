
exports.up = function(knex) {
  return knex.schema.table('homes', t => {
    t.varchar('colour').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.table('homes', t => {
      t.dropColumn('color')
  })
};
