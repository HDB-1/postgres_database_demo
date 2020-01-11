
exports.up = function(knex) {
  return knex.schema.createTable('homes', function (t) {
      t.increments();
      t.integer('size').notNullable();
      t.string('material').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('homes');
};
