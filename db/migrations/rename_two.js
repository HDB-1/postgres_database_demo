
exports.up = function(knex) {
  return knex.schema.table('people', table => {
      table.renameColumn('homies', 'occupants')
  })
};

exports.down = function(knex) {
    return knex.schema.table('people', table => {
        table.renameColumn('occupants', 'homies')
    })
};
